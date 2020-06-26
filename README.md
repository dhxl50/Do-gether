# Do-gether
----------
Sharing your TODO-LIST with others!<br>
Do-gether은 투두리스트를 다른사람들과 공유할 수 있도록 도와주는 동기부여 서비스입니다.

## HOW TO USE
----------------
You can come here and use DO-GETHER.<br>
[`http://wwww.dogether.tk`](http://wwww.dogether.tk)
![main](/uploads/0b44105f829a49b4211d4e6adc9d2c33/main.png)

## HOW TO INSTALL
-------------
### First, clone this project
`git clone http://khuhub.khu.ac.kr/2019102153/Do-gether.git`

and execute this command.
```sh
npm install
cd client
npm install
```


### Second, install yarn.
On Debian or Ubuntu Linux, you can install Yarn via our Debian package repository. 

You will first need to configure the repository:
```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

On Ubuntu 16.04 or below and Debian Stable,<br>
you will also need to configure the NodeSource repository to get a new enough version of Node.js.

Then you can simply:
`sudo apt update && sudo apt install yarn`

Reference from [`YARN`](https://yarnpkg.com/en/docs/install)


### Third, add [database.json]
you should add `database.json` in the following format.
```sh
{
    "host":"host name",
    "user":"user name",
    "password":"password",
    "port":"port number",
    "database":"table name"
}
```


### Finally, you can use DOGETHER by using `yarn dev` in `Do-gether` directory.


### Error
----------
In my case, an unknown error occurred when running `yarn dev`.<br>
So I solved it as follows.

Execute this command.
`vi Do-gether/client/node_modules/react-scripts/config/webpackDevServer.config.js`

And change the `disableHostCheck: ...` option to `disableHostCheck: true`.
![error](/uploads/be3c1c269c2ee157825f6d9e143706fc/error.png)

## LISENCE
---------
Do-gether is free software, and may be redistributed under the terms specified in the [MIT LICENSE](http://khuhub.khu.ac.kr/2019102153/Do-gether/blob/master/LICENSE.txt) file.