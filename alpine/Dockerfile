FROM alpine
RUN apk add --no-cache bash

RUN adduser -D myuser

RUN mkdir /app

# add a volume to container
VOLUME ["/app"]

# owner will be reset to root
RUN chown myuser /app

# this will be active when container start
USER myuser

CMD ["bash"]