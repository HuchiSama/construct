import { message } from 'antd';

import { post } from '@utils';
import * as apis from '@constants/apis';

class Actions {
  logout() {
    return post(apis.LOGOUT_URL, {})
      .then((res) => {
        message.success(res);
        setTimeout(() => (location.href = '/login'), 1000);
      })
      .catch((e) => {
        message.error(e);
      });
  }
}

export default new Actions();
