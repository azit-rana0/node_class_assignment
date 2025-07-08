# which os? which nodeversion?
# copy your code in docker's virtual machine
# run your code

# Node v 20 , OS Debiar (Linux)
FROM node:hydrogen-slim

# which folder will contain my code inside vm (Container)
WORKDIR /app

# Copy all code from my system to virtual system (Container)
COPY . /app/

# Install all npm package
RUN npm i

# Run project
CMD ["node", "index.js"]