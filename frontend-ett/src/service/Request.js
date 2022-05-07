export default class RequestService {
  constructor(http) {
    this.http = http;
  }


  async getPartners(id) {
    const query = id ? `/${id}?populate=members.image,image` : '?populate=members.image,image';
    return this.http.fetch(`/api/partners${query}`, {
      method: 'GET',
    }); 
  }

  async getProjects(id) {
    const query = id ? `/${id}?sort=createdAt:desc&populate=image` : '?sort=createdAt:desc&populate=image';
    return this.http.fetch(`/api/projects${query}`, {
      method: 'GET',
    }); 
  }

  async getTeams(id) {
    const query = id ? `/${id}?populate=members.image,image, members` : '?populate=members.image,image, members';
    return this.http.fetch(`/api/teams${query}`, {
      method: 'GET',
    }); 
  }

  async getEvents(id) {
    const query = id ? `/${id}?sort=start_date&populate=image` : '?sort=start_date&populate=image';
    return this.http.fetch(`/api/events${query}`, {
      method: 'GET',
    }); 
  }

  async getBlogs(id) {
    console.log("get Blogs");
    const query = id ? `/${id}?sort=createdAt:desc&populate=image` : '?sort=createdAt:desc&populate=image';
    return this.http.fetch(`/api/blogs${query}`, {
      method: 'GET',
    }); 
  }

  async getMembers(id) {
    const query = id ? `/${id}?populate=image` : '?populate=image';
    return this.http.fetch(`/api/members${query}`, {
      method: 'GET',
    }); 
  }

  async getLogo(id) {
    const query = id ? `/${id}?populate=image` : '?populate=image';
    return this.http.fetch(`/api/logos${query}`, {
      method: 'GET',
    }); 
  }

  async postContact(text, name, email) {
    return this.http.fetch(`/api/contacts`, {
      method: 'POST',
      body: JSON.stringify({ "data" : {"name" : name, "email" : email, "text" : text }}),
    });
  }

  // onSync(callback) {
  //   return this.socket.onSync('partners', callback);
  // }
}
