import HttpClient from '../network/http';
import RequestService from '../service/Request';

import { toContainKeys, toInclude} from 'jest-extended';

// A mocked example of the result of a fetch call
const fetchJsonDataMock = {
    data: [],
    meta: {
        page: 0,
        pageSize: 0,
        pageCount: 0,
        total: 0,
    }
};

// Function for delaying execution time to simulate fetch API call
const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while(currentDate - date < milliseconds);
};

expect.extend({ toContainKeys, toInclude});
const requestService = new RequestService(new HttpClient(process.env.REACT_APP_BASE_URL));

// Unit testing Request.js with mocks
describe('Request.js test with mocked API call', () => {

    let httpClientFetchMock;

    beforeAll(() => {
        httpClientFetchMock = jest.spyOn(HttpClient.prototype, 'fetch').mockImplementation(async (url, options) => {
            sleep(100);
            return fetchJsonDataMock;
        });
    });

    afterEach(() => {
        httpClientFetchMock.mockClear();
    })

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test('Requesting partners data calls HttpClient fetch with correct method, route, and image population parameter', async () => {
        await expect(requestService.getPartners()).resolves.toContainKeys(['data', 'meta']);
        expect(httpClientFetchMock).toBeCalledTimes(1);
        
        // test calling with 'id' argument
        await requestService.getPartners(1);
        expect(httpClientFetchMock).toBeCalledTimes(2);

        expect(httpClientFetchMock).nthCalledWith(1, 
            expect.stringMatching(/\/api\/partners\?.*?populate=.*?image/), { method: 'GET' });
        expect(httpClientFetchMock).nthCalledWith(2, 
            expect.stringMatching(/\/api\/partners\/1\?.*?populate=.*?image/), { method: 'GET' });
    });

    test('Requesting projects data calls HttpClient fetch with correct method, route, and image population parameter', async () => {
        await expect(requestService.getProjects()).resolves.toContainKeys(['data', 'meta']);
        expect(httpClientFetchMock).toBeCalledTimes(1);

        // test calling with 'id' argument
        await requestService.getProjects(1);
        expect(httpClientFetchMock).toBeCalledTimes(2);

        expect(httpClientFetchMock).nthCalledWith(1, 
            expect.stringMatching(/\/api\/projects\?.*?populate=.*?image/), { method: 'GET' });
        expect(httpClientFetchMock).nthCalledWith(2, 
            expect.stringMatching(/\/api\/projects\/1\?.*?populate=.*?image/), { method: 'GET' });
    });

    test('Requesting teams data calls HttpClient fetch with correct method, route, and image population parameter', async () => {
        await expect(requestService.getTeams()).resolves.toContainKeys(['data', 'meta']);
        expect(httpClientFetchMock).toBeCalledTimes(1);

        // test calling with 'id' argument
        await requestService.getTeams(1);
        expect(httpClientFetchMock).toBeCalledTimes(2);

        expect(httpClientFetchMock).nthCalledWith(1, 
            expect.stringMatching(/\/api\/teams\?.*?populate=.*?image/), { method: 'GET' });
        expect(httpClientFetchMock).nthCalledWith(2, 
            expect.stringMatching(/\/api\/teams\/1\?.*?populate=.*?image/), { method: 'GET' });

    });

    test('Requesting events data calls HttpClient fetch with correct method, route, and image population parameter', async () => {
        await expect(requestService.getEvents()).resolves.toContainKeys(['data', 'meta']);
        expect(httpClientFetchMock).toBeCalledTimes(1);

        // test calling with 'id' argument
        await requestService.getEvents(1);
        expect(httpClientFetchMock).toBeCalledTimes(2);

        expect(httpClientFetchMock).nthCalledWith(1, 
            expect.stringMatching(/\/api\/events\?.*?populate=.*?image/), { method: 'GET' });
        expect(httpClientFetchMock).nthCalledWith(2, 
            expect.stringMatching(/\/api\/events\/1\?.*?populate=.*?image/), { method: 'GET' });
    })

    test('Requesting blogs data calls HttpClient fetch with correct method, route, and image population parameter', async () => {
        await expect(requestService.getBlogs()).resolves.toContainKeys(['data', 'meta']);
        expect(httpClientFetchMock).toBeCalledTimes(1);

        // test calling with 'id' argument
        await requestService.getBlogs(1);
        expect(httpClientFetchMock).toBeCalledTimes(2);

        expect(httpClientFetchMock).nthCalledWith(1, 
            expect.stringMatching(/\/api\/blogs\?.*?populate=.*?image/), { method: 'GET' });
        expect(httpClientFetchMock).nthCalledWith(2, 
            expect.stringMatching(/\/api\/blogs\/1\?.*?populate=.*?image/), { method: 'GET' });
    });

    test('Requesting members data calls HttpClient fetch with correct method, route, and image population parameter', async () => {
        await expect(requestService.getMembers()).resolves.toContainKeys(['data', 'meta']);
        expect(httpClientFetchMock).toBeCalledTimes(1);

        // test calling with 'id' argument
        await requestService.getMembers(1);
        expect(httpClientFetchMock).toBeCalledTimes(2);

        expect(httpClientFetchMock).nthCalledWith(1, 
            expect.stringMatching(/\/api\/members\?.*?populate=.*?image/), { method: 'GET' });
        expect(httpClientFetchMock).nthCalledWith(2, 
            expect.stringMatching(/\/api\/members\/1\?.*?populate=.*?image/), { method: 'GET' });
    });

    test('Requesting logo data calls HttpClient fetch with correct method, route, and image population parameter', async () => {
        await expect(requestService.getLogo()).resolves.toContainKeys(['data', 'meta']);
        expect(httpClientFetchMock).toBeCalledTimes(1);

        // test calling with 'id' argument
        await requestService.getLogo(1);
        expect(httpClientFetchMock).toBeCalledTimes(2);

        expect(httpClientFetchMock).nthCalledWith(1, 
            expect.stringMatching(/\/api\/logos\?.*?populate=.*?image/), { method: 'GET' });
        expect(httpClientFetchMock).nthCalledWith(2, 
            expect.stringMatching(/\/api\/logos\/1\?.*?populate=.*?image/), { method: 'GET' });
    });

});

// Unit testing http.js with mocks
describe('http.js test with mocked API call', () => {
    
    let globalFetchMock;

    test("HttpClient's fetch calls global fetch with the correct domain, method, route, image population parameter and retrieve JSON data correctly",
     async () => {
        const baseURL = process.env.REACT_APP_BASE_URL;

        // Mock global fetch to succeed
        globalFetchMock = jest.spyOn(global, 'fetch').mockImplementation(async(input, init) => {
            sleep(100);
            return {
                json: () => {
                    return fetchJsonDataMock;
                },
                status: 200,
            }
        });

        await expect(requestService.getPartners()).resolves.toContainKeys(['data','meta']);
        expect(globalFetchMock).toBeCalledTimes(1);
        expect(globalFetchMock).lastCalledWith(
            expect.stringMatching(new RegExp(baseURL + /\/api\/partners\?.*?populate=.*?image/.source)),
            expect.objectContaining({
                method: 'GET',
            })
        );

        await expect(requestService.getProjects()).resolves.toContainKeys(['data','meta']);
        expect(globalFetchMock).toBeCalledTimes(2);
        expect(globalFetchMock).lastCalledWith(
            expect.stringMatching(new RegExp(baseURL + /\/api\/projects\?.*?populate=.*?image/.source)),
            expect.objectContaining({
                method: 'GET',
            })
        );

        await expect(requestService.getEvents()).resolves.toContainKeys(['data','meta']);
        expect(globalFetchMock).toBeCalledTimes(3);
        expect(globalFetchMock).lastCalledWith(
            expect.stringMatching(new RegExp(baseURL + /\/api\/events\?.*?populate=.*?image/.source)),
            expect.objectContaining({
                method: 'GET',
            })
        );

        await expect(requestService.getTeams()).resolves.toContainKeys(['data','meta']);
        expect(globalFetchMock).toBeCalledTimes(4);
        expect(globalFetchMock).lastCalledWith(
            expect.stringMatching(new RegExp(baseURL + /\/api\/teams\?.*?populate=.*?image/.source)),
            expect.objectContaining({
                method: 'GET',
            })
        );

        await expect(requestService.getMembers()).resolves.toContainKeys(['data','meta']);
        expect(globalFetchMock).toBeCalledTimes(5);
        expect(globalFetchMock).lastCalledWith(
            expect.stringMatching(new RegExp(baseURL + /\/api\/members\?.*?populate=.*?image/.source)),
            expect.objectContaining({
                method: 'GET',
            })
        );

        await expect(requestService.getBlogs()).resolves.toContainKeys(['data','meta']);
        expect(globalFetchMock).toBeCalledTimes(6);
        expect(globalFetchMock).lastCalledWith(
            expect.stringMatching(new RegExp(baseURL + /\/api\/blogs\?.*?populate=.*?image/.source)), 
            expect.objectContaining({
                method: 'GET',
            })
        );

        await expect(requestService.getLogo()).resolves.toContainKeys(['data','meta']);
        expect(globalFetchMock).toBeCalledTimes(7);
        expect(globalFetchMock).lastCalledWith(
            expect.stringMatching(new RegExp(baseURL + /\/api\/logos\?.*?populate=.*?image/.source)),
            expect.objectContaining({
                method: 'GET',
            })
        );
    });
    
    test("Http's client fetch return undefined if response status code indicates failure", async () => {
        // Mock global fetch to fail
        globalFetchMock = jest.spyOn(global, 'fetch').mockImplementation(async(input, init) => {
            sleep(100);
            return {
                json: () => {},
                status: 404, // Random status code for failure (client: 400 - 499 / server: 500 - 599)
            }
        });
        await expect(requestService.getPartners())  .resolves.toBe(undefined);  
                                                    // .rejects.toThrow();
        await expect(requestService.getProjects())  .resolves.toBe(undefined);
                                                    // .rejects.toThrow();
        await expect(requestService.getEvents())    .resolves.toBe(undefined);
                                                    // .rejects.toThrow();
        await expect(requestService.getTeams())     .resolves.toBe(undefined);
                                                    // .rejects.toThrow();
        await expect(requestService.getMembers())   .resolves.toBe(undefined);
                                                    // .rejects.toThrow();
        await expect(requestService.getBlogs())     .resolves.toBe(undefined);
                                                    // .rejects.toThrow();
        await expect(requestService.getLogo())      .resolves.toBe(undefined);
                                                    // .rejects.toThrow();
        
    });

    afterEach(() => {
        globalFetchMock.mockRestore();
    });
});

// Integration testing
describe('Real API call to the backend', () => {
    let spiedGlobalFetch;
    let backendURL;

    beforeAll(() => {
        spiedGlobalFetch = jest.spyOn(global, 'fetch');
        backendURL = process.env.REACT_APP_BASE_URL;
        jest.setTimeout(30000);
    });

    afterEach(() => {
        spiedGlobalFetch.mockClear();
    });

    test('GET /api/partners using getPartners() returns 200 OK', async () => {
        await requestService.getPartners();
        const callResult = spiedGlobalFetch.mock.results[0];
        // Expect to have been called
        expect(callResult).toBeDefined();

        const response = await callResult.value;
        expect(response.url).toInclude(backendURL + '/api/partners');
        expect(response.status).toBe(200);
        expect(response.headers.map['content-type']).toInclude('application/json');
    });

    test('GET /api/projects using getProjects() returns 200 OK', async () => {
        await requestService.getProjects();
        const callResult = spiedGlobalFetch.mock.results[0];
        // Expect to have been called
        expect(callResult).toBeDefined();

        const response = await callResult.value;
        expect(response.url).toInclude(backendURL + '/api/projects');
        expect(response.status).toBe(200);
        expect(response.headers.map['content-type']).toInclude('application/json');
    });

    test('GET /api/events using getEvents() returns 200 OK', async () => {
        await requestService.getEvents();
        const callResult = spiedGlobalFetch.mock.results[0];
        // Expect to have been called
        expect(callResult).toBeDefined();

        const response = await callResult.value;
        expect(response.url).toInclude(backendURL + '/api/events');
        expect(response.status).toBe(200);
        expect(response.headers.map['content-type']).toInclude('application/json');
    });

    test('GET /api/teams using getTeams() returns 200 OK', async () => {
        await requestService.getTeams();
        const callResult = spiedGlobalFetch.mock.results[0];
        // Expect to have been called
        expect(callResult).toBeDefined();

        const response = await callResult.value;
        expect(response.url).toInclude(backendURL + '/api/teams');
        expect(response.status).toBe(200);
        expect(response.headers.map['content-type']).toInclude('application/json');
    });

    test('GET /api/members using getMembers() returns 200 OK', async () => {
        await requestService.getMembers();
        const callResult = spiedGlobalFetch.mock.results[0];
        // Expect to have been called
        expect(callResult).toBeDefined();

        const response = await callResult.value;
        expect(response.url).toInclude(backendURL + '/api/members');
        expect(response.status).toBe(200);
        expect(response.headers.map['content-type']).toInclude('application/json');
    });

    test('GET /api/blogs using getBlogs() returns 200 OK', async () => {
        await requestService.getBlogs();
        const callResult = spiedGlobalFetch.mock.results[0];
        // Expect to have been called
        expect(callResult).toBeDefined();

        const response = await callResult.value;
        expect(response.url).toInclude(backendURL + '/api/blogs');
        expect(response.status).toBe(200);
        expect(response.headers.map['content-type']).toInclude('application/json');
    });

    test('GET /api/logos using getLogo() returns 200 OK', async () => {
        await requestService.getLogo();
        const callResult = spiedGlobalFetch.mock.results[0];
        // Expect to have been called
        expect(callResult).toBeDefined();

        const response = await callResult.value;
        expect(response.url).toInclude(backendURL + '/api/logos');
        expect(response.status).toBe(200);
        expect(response.headers.map['content-type']).toInclude('application/json');
    });
});