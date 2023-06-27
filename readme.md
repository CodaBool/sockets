# server install
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
- . ~/.nvm/nvm.sh
- nvm install --lts
- sudo cp $(echo "$NVM_DIR/versions/node/$(nvm version)/bin/node") /bin
- sudo yum install git -y -q

### App
npm install -g @socket.io/pm2


### PM2
pm2 start app.js


module.exports = {
  apps : [{
    name: "typer",
    script: "./app.js",
  }, {
     name: 'slap',
     script: 'worker.js'
  }, {
     name: 'bool',
     script: 'worker.js'
  }]
}
