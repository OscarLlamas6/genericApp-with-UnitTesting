let aws_keys = {
    s3: {
        region: 'us-east-2',
        accessKeyId: process.env.ACCESKEY,
        secretAccessKey: process.env.SECRETKEY,
        //apiVersion: '2006-03-01',
    }
}
module.exports = aws_keys