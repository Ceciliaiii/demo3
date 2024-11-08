import Mock from 'mockjs';
console.log('Mock.js is loaded:', Mock);
// 模拟登录接口
export const mockLoginApi = () => {
    Mock.mock('/api/login', 'post', (options: { body: string; }) => {
        const { username, password } = JSON.parse(options.body);
        if (username === 'czx666' && password === '123456') {
          return {
            success: true,
            message: '登录成功',
          };
        } else {
          return {
            success: false,
            message: '用户名或密码错误',
          };
        }
        console.log('模拟接口被调用了');
        
    });
};

