import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

// API service functions 

export const api = {

  //get all users
  getUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      
    }
  },

  // add new user

  addUser: async (Name) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users`, { Name });
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error);
      
    }
  },

  // claim points for user 

  claimPoints: async (userId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/claim`, { userId });
      return response.data;
    } catch (error) {
      console.error('Error claiming points:', error);
      
    }
  },

  // Get users history 
  getHistory: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/history`);
      return response.data;
    } catch (error) {
      console.error('Error fetching history:', error);
      
    }
  }

}