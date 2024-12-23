function hashByLength(length) {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;

}

const randomHash = hashByLength(20);
//const randomHash = hashByLength(15);
//const randomHash = hashByLength(100);
// saída exemplo (O5VbATJLKCwBiYygirkJ8EFO01Y8DxQuogfwKg3vAynsoMeXc2QbY1qJG2jEg6vQlPg951RpIE5Biw5hGs7efx4NB0A7f1DCa7yY)
//    console.log(randomHash);
module.exports = hashByLength; 