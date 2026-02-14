COMPOSE ?= docker compose
IMAGE ?= soulgarden/swup:pro-0.0.9

.PHONY: docker_up du docker_down dd docker_logs dl build bp push pp release rp

docker_up du:
	$(COMPOSE) up --build -d

docker_down dd:
	$(COMPOSE) down --remove-orphans

docker_logs dl:
	$(COMPOSE) logs -f nginx

build bp:
	docker build . -f ./docker/nginx/Dockerfile -t $(IMAGE) --platform linux/amd64

push pp:
	docker push $(IMAGE)

release rp:
	$(MAKE) build
	$(MAKE) push
