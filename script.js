const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: 'Sua_API_Key',
  appSecret: 'Sua_API_Key_Secret',
  accessToken: 'Seu_Acess_Token',
  accessSecret: 'Seu_Acess_Token_Secret',
});

async function postTweet(message) {
    try {
      const tweet = await client.v2.tweet(message);
      console.log('Tweet enviado com sucesso:', tweet);
    } catch (error) {
      console.error('Erro ao enviar o tweet:', error);
    }
}
  
postTweet('Teste de mensagem usando a API do twitter!!!!! :D')