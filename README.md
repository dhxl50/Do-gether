# About The Project

### Do-gether
Sharing your TODO-LIST with others!  Do-gether은 투두리스트를 다른사람들과 공유할 수 있도록 도와주는 동기부여 서비스입니다.



### Bulit With

-   React
    
-   Material-ui
    
-   Node.js
    
-   Mysql
    
- Unsplash Image API

  <br>

# HOW TO USE

You can come here and use DO-GETHER.  [`http://www.dogether.tk`](http://www.dogether.tk) // now service teminated

<br>

# HOW TO INSTALL

#### First, clone this project

`git clone https://github.com/dhxl50/Do-gether.git`

and execute this command.
```bash
npm install  
cd client  
npm install
```
<br>

#### Second, install YARN.

On Debian or Ubuntu Linux, you can install Yarn via our Debian package repository.

You will first need to configure the repository:

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -  
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

On Ubuntu 16.04 or below and Debian Stable,  
you will also need to configure the NodeSource repository to get a new enough version of Node.js.

Then you can simply:  `sudo apt update && sudo apt install yarn`

Reference from [`YARN`](https://yarnpkg.com/en/docs/install) 

<br>

#### Third, add "database.json"

you should add `database.json` in the following format.
```json
{  
 "host":"host name",  
 "user":"user name",  
 "password":"password",  
 "port":"port number",  
 "database":"table name"  
}
```
<br>

#### Finally, you can use DOGETHER by using `yarn dev` in `Do-gether` directory! 👍
<br>

#### Solved Error

In my case, an unknown error occurred when running `yarn dev`.  So I solved it as follows.

Execute this command.  `vi Do-gether/client/node_modules/react-scripts/config/webpackDevServer.config.js`

And change the `disableHostCheck: ...` option to `disableHostCheck: true`.

<br>

# Presentation File

You can check my presentation [here](https://github.com/dhxl50/Do-gether/blob/master/Do-gether.pptx).

<br>

# LISENCE

Do-gether is free software, and may be redistributed under the terms specified in the [MIT LICENSE](https://github.com/dhxl50/Do-gether/blob/master/LICENSE) file.