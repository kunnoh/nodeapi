dev:
	docker build -t nodedb:latest ./db
	@if docker ps -a | grep -q postgresdb; then \
        echo "nodedb container is running."; \
		npm -C ./app run dev; \
    else \
		docker run -d -p 5432:5432 --name postgresdb nodedb; \
		npm -C ./server run dev; \
    fi

app-docker:
	# docker stop nodeApp
	docker build -t app ./app/.
	docker run -d -p 3000:3000 --name nodeApp app

clean:
	@if docker ps -a | grep -q nodedb; then \
        docker stop nodedb; \
		docker rm nodedb; \
        echo "Stopped and removed nodedb container."; \
    else \
        echo "nodedb container is not running."; \
    fi

	@if docker ps -a | grep -q nodeApp; then \
        docker stop nodeApp; \
		docker rm nodeApp; \
        echo "Stopped and removed nodeApp container."; \
    else \
        echo "nodeApp container is not running."; \
    fi

	@if docker images | grep -q app | grep -q latest; then \
		docker rmi -f app:latest \
        echo "nodeApp:latest image is available."; \
    else \
        echo "nodeApp:latest image is not available."; \
    fi

	@if docker images | grep -q nodedb | grep -q latest; then \
		docker rmi -f nodedb:latest \
        echo "nodedb:latest image is available."; \
    else \
        echo "nodedb:latest image is not available."; \
    fi