# scientist_GAIAA
Scientist Guided, AI-Assisted, Automated Drug Discovery Platform

## About

This is the master repository for the NIH NCATS 2020 ASPIRE Reduction-to-Practice Challenge for the IBRI-IU-Purdue team.

The title of the proposal was: "Accelerating Molecular Innovation in Pain through an AI-Driven, Human-Guided, and Automated Open Drug Discovery Platform" and one of the five winners announced in April 2021.

## Deployment

The web interfaces are designed to be deployed on AWS serverless using S3 as the web server, and accessing Lambda functions through the Gateway. Future versions may enable deployment on different technology stacks.

The Python scripts can be run as stand-alone.

Steps to run the web interface locally for development.
1. Clone the project in your local folder: git clone https://github.com/IndianaBiosciences/scientist_GAIAA.git
2. Navigate to the correct folder location: cd scientist_GAIAA/web
3. Install the dependencies (assuming npm is already installed): `npm install`   
4. Start the react app (launches to local browser): `npm start`

Steps for hosting the application on AWS:
1. Configure AWS: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
2. Check the AWS bucket: aws s3 ls s3://ibri-decima and upload the newly created files to S3://ibri-decima
3. Run the command locally:  `npm run build`
4. Copy the build folder to AWS S3:
	`aws s3 cp build/ s3://ibri-decima --recursive`
4. Go to AWS console for hosting configuration.
5. Create User Pool, IDentity Pool and APIGateway for configuring Cognito backend. Please refer to AWS documentation.

## Testing

All attempts are made to have testing across all the components and appropriate interpretable error messages sent to the console. However, the test suite is still being developed to have coverage across all the components. To run the tests `npm test`

## Dependencies

### Node and React
This repository is set up to use Node.js and React (https://reactjs.org) for the web interface. It uses minimal other libraries, but is built with Tailwind CSS (https://tailwindcss.com) for the styling of the pages to allow maximal flexibility.

### chem_utils
The Python scripts reference another IBRI utilities repository "IndianaBiosciences/chem_utils" -- https://github.com/IndianaBiosciences/chem_utils/ that is currently private, but will be converted to public when it is stabilized.

### RDkit

RDkit is the primary opensource toolkit to use for handling compounds and associated computations including creating images through the svg

https://rdkit.org/
