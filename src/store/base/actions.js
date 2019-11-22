import axios from 'axios';
import api from '@/api';
import { formDataSerialize } from '@/utils/form'
import userInfoJson from '@/mock/userInfo.json';
import * as types from './mutation-types';

const actions = {
  login({ commit }, query = {}) {
    return new Promise((resolve, reject) => {
      axios.request({
        url: api.menu.login,
        method: 'get',
        data: formDataSerialize(query),
      })
        .then(res => {
          commit(types.SET_USER_INFO, res.data.data);
          commit(types.SET_MENU_LIST, res.data.data.attributes.menus);
          resolve(res)
        })
        .catch(err => reject(err));
    });
  },
  localLogin({ commit }, query = {}) {
    return new Promise((resolve, reject) => {
      console.log(userInfoJson);
      commit(types.SET_USER_INFO, userInfoJson);
      commit(types.SET_MENU_LIST, userInfoJson.attributes.menus);
      resolve(userInfoJson);
    });
  },
};

export default actions;
