#
##  Build
##        docker build -t addisontest .
##  Run (remap container port to host 443 port)
##        docker run -it -p 443:8443 addisontest
##  Access in a web browser using base URL https://localhost
FROM hub.docker.hpecorp.net/global-it-addison/addison-runtime-node14:2.0.0

# Defining a HOST environment variable will make Addison listen on all interfaces (0.0.0.0)
# on port 8443  (as port 443 cannot be bound to when running as a non-privileged user)
ENV ADDISON_HOST=0.0.0.0 \
    ADDISON_PORT=8443 \
    https_proxy=http://web-proxy.corp.hpecorp.net:8080 \
    http_proxy=http://web-proxy.corp.hpecorp.net:8080

# Define the health check (Docker EE / UCP only)
HEALTHCHECK --interval=1m --timeout=15s --retries=5 \
   CMD curl --noproxy localhost -f  -k https://localhost:${ADDISON_PORT}/healthcheck || exit 1

# Copy built application files (assumes npm install run in Jenkinsfile)
COPY . /home/$user/

# Expose port on which Addison is listening
EXPOSE $ADDISON_PORT

# Define default command.
CMD [ "/bin/sh", "./entrypoint.sh" ]
