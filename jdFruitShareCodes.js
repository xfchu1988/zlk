/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  'e3c95f1ef8ba4b6685047b62b4a0dd6a@64364ad94cb84179bdf732cd57c17a4b@19a34bfd01d243e0a7cb8ea9b5f4349d@6091e398c53a4dd087003247ac26810f@bb6ff92e5f7f4c7b9dc8b818f316fe03@9f1b9e72a1bb4b7badbd03a3c4e4edcf@facc26245f614fd6a64419cf84449f46@f344c7eb6a584d47b1f86a5fb616bdc6@90fa9322614b4fe2b255a7edf1bf5d98@e2a27d1e38c24e78bdf6c8e23d5d1673@bb287c08ca33415c92d624d514b3f00c@058fbdae5bd1480ab10becb70b931178@2ebb268185d944afbd209bf7c2746378@4bcbb8787ec4477e8dca4fe755ba8bcf@15294587e73f4bc798cca0887eb6ca2f@a7eacf66162e4c38b54e254a2aa09c57@726f36fc8da640f0a8baefc4a9216947',//账号一的好友shareCode,不同好友中间用@符号隔开
  'e3c95f1ef8ba4b6685047b62b4a0dd6a@64364ad94cb84179bdf732cd57c17a4b@19a34bfd01d243e0a7cb8ea9b5f4349d@6091e398c53a4dd087003247ac26810f@bb6ff92e5f7f4c7b9dc8b818f316fe03@9f1b9e72a1bb4b7badbd03a3c4e4edcf@facc26245f614fd6a64419cf84449f46@f344c7eb6a584d47b1f86a5fb616bdc6@90fa9322614b4fe2b255a7edf1bf5d98@e2a27d1e38c24e78bdf6c8e23d5d1673@bb287c08ca33415c92d624d514b3f00c@058fbdae5bd1480ab10becb70b931178@2ebb268185d944afbd209bf7c2746378@4bcbb8787ec4477e8dca4fe755ba8bcf@15294587e73f4bc798cca0887eb6ca2f@a7eacf66162e4c38b54e254a2aa09c57@726f36fc8da640f0a8baefc4a9216947',//账号二的好友shareCode，不同好友中间用@符号隔开
]

// 从日志获取互助码
// const logShareCodes = require('./utils/jdShareCodes');
// if (logShareCodes.FRUITSHARECODES.length > 0 && !process.env.FRUITSHARECODES) {
//   process.env.FRUITSHARECODES = logShareCodes.FRUITSHARECODES.join('&');
// }

// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else {
  console.log(`由于您环境变量(FRUITSHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
