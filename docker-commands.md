demo commands:

tmux 

docker images

docker ps

explore docker hub

show ubuntu, centos, redis images

docker run --interactive --tty ubuntu

docker run --interactive --tty --rm redis

docker pull ubuntu

docker pull redis

docker run -it --rm  redis

docker run -it --rm -p 6379:6379 redis

docker build -t demoimage .

docker login

docker tag demoimage misterhex/demoimage

docker push misterhex/demoimage

docker rmi misterhex/demoimage

docker rmi demoimage


