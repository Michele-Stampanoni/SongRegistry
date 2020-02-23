//import truffle assertions
const truffleAssert = require('truffle-assertions') 

//import contract artifact 
const SongRegistry = artifacts.require('./SongRegsitry.sol')

contract('SongRegistry', function (accounts) {
    //predefine contract instance
    let SongRegistryInstance 

    // before each test, create a new contract instance
    beforeEach(async function () {
        SongRegistryInstance = await SongRegistry.new()
    })

    // Test 1
    it('should add a song to the registry', async function () {
      await SongRegistryInstance.register("Cool Song", "example.com", 1, { 'from': account[0] }) 
      let song = await SongRegistryInstance.songs(0) 
      assert.equal(song.title = 'Cool Song', 'title not set correclty')
      assert.equal(song.owner = accounts[0], 'owner is not account 0') 
    })


   // Test 2
     it('should check there is more than one address of buyers', async function () {
     await SongRegistryInstance.register(song) 
     await SongRegistryInstance.buyers(accounts[i])
     let buyers = await SongRegistryInstance.register
     assert.equal(song.address = accounts[0], 'owner did not register song')
     assert.equal(buyers[song] = accounts[i], 'only one address in array of buyers')
     })


    //Test 3
     it('should add a song when it is registered', async function () {
     await SongRegistryInstance.register(songs)
     let song = await SongRegistryInstance.numberOfSongs(songs)
     assert.equal(song.length = SongRegistryInstance.register(1) , 'songs not added when registered') 
     })

    //Test 4
     it('should check buyers are in array after song purchase', async function () {
    await SongRegistryInstance.buyers[songId]  
    let address = await SongRegistryInstance.songBuyers(songId) 
     assert.equal(songBuyers = accounts[i], 'address not part of list of buyers')
     }) 
     
    })  