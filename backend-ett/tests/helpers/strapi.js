const Strapi = require('@strapi/strapi');
const fs = require('fs');
const _ = require('lodash');

let instance;

async function setupStrapi() {
    // start strapi instance and server
    if (!instance){
        instance = await Strapi().load();  // strapi is global now
        await instance.server.mount();
    }
    return instance; 
}

async function cleanUpStrapi() {
    const dbSettings = instance.config.get('database.connection');
    const tmpDbFile = dbSettings.connection.filename;
    
    //close server to release the db-file
    await instance.server.httpServer.close();
  
    //delete test database after all tests
    if (dbSettings && tmpDbFile) {
      if (fs.existsSync(tmpDbFile)) {
        fs.unlinkSync(tmpDbFile);
      }
    }

    await instance.db.connection.destroy();
}

async function setPublicPermissions(newPermissions) {
    // Find the ID of the public role
    const publicRole = await strapi
      .query("plugin::users-permissions.role")
      .findOne({
        where: {
          type: "public",
        },
      });
  
    // Create the new permissions and link them to the public role
    const allPermissionsToCreate = [];
    Object.keys(newPermissions).map((controller) => {
      const actions = newPermissions[controller];
      const permissionsToCreate = actions.map((action) => {
        return strapi.query("plugin::users-permissions.permission").create({
          data: {
            action: `api::${controller}.${controller}.${action}`,
            role: publicRole.id,
          },
        });
      });
      allPermissionsToCreate.push(...permissionsToCreate);
    });
    await Promise.all(allPermissionsToCreate);
}


module.exports = {setupStrapi, cleanUpStrapi, setPublicPermissions};