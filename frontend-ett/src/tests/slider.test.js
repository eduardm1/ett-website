import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RequestService from '../service/Request';
import HttpClient from '../network/http';

// import the tested components
// import Sponsors from '../views/Home/containers/sponsors/Sponsors';

const requestService = new RequestService(new HttpClient(process.env.REACT_APP_BASE_URL));

