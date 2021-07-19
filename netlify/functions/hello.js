exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello Tom, this is a netlify function"}, null, 2)
    };
}