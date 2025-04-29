docker_up du:
	docker-compose up --build -d

docker_up_mac dum:
	docker-compose -f docker-compose.yml -f docker-compose-mac.yml up --build -d

docker_down dd:
	docker-compose down

build: bp

build_prod bp:
	docker build . -f ./docker/nginx/Dockerfile -t soulgarden/swup:pro-0.0.7 --platform linux/amd64
	docker push soulgarden/swup:pro-0.0.7
