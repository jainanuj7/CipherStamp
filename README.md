# CipherStamp
✅📂⛓️ Verifying the integrity of digital files using Decentralized Timestamping on the Blockchain <br />
Deployed with ❤️ on Heroku https://cipherstamp.herokuapp.com/ <br /><br />

__Note: It is currently deployed on a free tier of Heroku, therefore the dyno sleeps due to inactivity. This resets the blockchain and track of old files are lost.__

# Why Cipherstamp?
1. Hassle free timestamping of all type of media files <br />
2. Free of cost <br />
3. Location based timestamping <br />
4. Securely retrieve your files using secret key <br />
5. Blockchain based; hence theoretically unhackable <br />
6. Unlimited validity <br /><br />

# General Use Cases
1. Securely sharing certifications / degrees by universities to make sure they are not further tampered and owner of the degree can be verified by any third party like other colleges (for higher education), companies (for hiring process) <br />
2. Sharing KYC details with different parties like online wallets, banking apps, etc <br />
3. Taking the ownership or patent of any intellectual property like research paper, art, photography <br />
4. Integration with satellites and dash cams to store live data/feed on a tamperproof blockchain <br /><br />

# Specific Use Case
Currently, there is no simple, cost-effective and automated method available to consumers to prove that video footage was not tampered with after a specific point in time. If the authenticity of a video file is contested, the status quo requires testimony of witnesses, or the hiring of experts to verify that the digital file has retained its integrity. These approaches are costly and time consuming. For example, it took two years for an international investigation into Malaysia Airlines Flight 17, which was shot down over the Ukraine in 2014, to confirm that several satellite images released by the Russian military had been digitally manipulated (Kramer, 2016). <br />
Additionally, there is no guarantee that a carefully and meticulously performed fraudulent modification of metadata or video frames will be discovered. A secure and cost-effective method is needed to allow anyone to verify that a video file has not been tampered with after a claimed date. To address this scenario, we introduce a mobile application that acts as a dashboard camera, which automatically creates a tamperproof distributed trusted timestamp on the Bitcoin blockchain for video files recorded during a collision. <br /><br />

# System Architecture
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/0architecture.jpg) <br /><br /><br /><br />

# Application Screenshots
__1. Application Overview__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/1overview.JPG) <br /><br />
__2. Upload your file__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/2upload.JPG) <br /><br /><br /><br />
__3. Block created successfully on blockchain and private key is generated__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/3upload_success.JPG) <br /><br /><br /><br />
__4. Email shared (optional) which contains private key and trasnaction details__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/4email.JPG) <br /><br /><br /><br />
__5. Transaction Explorer__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/5transaction_explorer.JPG) <br /><br /><br /><br />
__6. Block Explorer__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/6block_explorer.JPG) <br /><br /><br /><br />
__7. Verifying whether a file uplaoded on the blockchain has been tampered__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/7integrity.JPG) <br /><br /><br /><br />
__8. Securely downloading your files using private key__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/8download.png) <br /><br /><br /><br />
__9. Location based timestamping__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/9location.jpeg) <br /><br /><br /><br />
__10. Heart of the application; the raw blockchain__ <br /><br />
![alt text](https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/10blockchain_raw.JPG) <br /><br /><br /><br />

# Prerequisites for running this application on your own machine
1. NodeJs v8.x+<br />
2. Web browser<br /><br />

# Steps to run
1. Clone this repository using ```git clone https://github.com/jainanuj7/CipherStamp.git``` or alternative download zip<br />
2. Browse into the folder where _package.json_ is present<br />
3. Install required packages ```npm install```<br />
4. Install _bower_ package globally ```npm install bower -g```<br />
5. Install frontend dependencies ```bower install```<br />
6. Run the application ```npm run node_1```<br />
7. Browse _localhost:3001_<br /><br />

### NOTE: This project was developed as B.E. Final Year Major Project under University of Pune (SPPU). For respecting the hard work of developers, all the APIs have been removed from the repository. Drop me an email at _lookforaj@gmail.com_ to know more about the APIs and complete report/documentation of the project

# Research Paper Publication

__Conference Name__: 4th International Conference on Internet of things, Next Generation Networks and Cloud Computing<br /><br />
__Paper Title__: Verifying the Integrity of Digital Files Using Decentralized Timestamping on Blockchain<br />
__Paper Id__: 50<br />
__Paper status__: – _ACCEPTED_<br /><br />
https://github.com/jainanuj7/CipherStamp/blob/master/screenshots/VERIFYING_THE_INTEGRITY_OF_DIGITAL_FILES_USING_DECENTRALIZED_TIMESTAMPING_ON_THE_BLOCKCHAIN.pdf









