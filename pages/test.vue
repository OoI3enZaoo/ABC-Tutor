<template>
  <div>
    <v-container>
      <h3>My Peer ID: {{mypeerid}}</h3>
      <br>
      <v-layout>
        <v-flex xs4>
            <v-text-field label="anotherid" v-model="anotherid"></v-text-field>
        </v-flex>
        <v-flex xs4>
          <v-btn @click.native="connection">Connect</v-btn>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>
<script>
import Peer from 'peerjs-client'
let peer;

export default {
  mounted () {
    // peer  = new Peer({key: 'yxjhqfcelv7vi'});
    peer  = new Peer({host: '172.104.167.197', port: 9000, path: '/myapp'});
    setTimeout(()=> {
      this.mypeerid = peer.id
      console.log('peer: ' + peer.id);
    },3000)
    peer.on('connection', function(conn) {
      conn.on('data', function(data){
        console.log(data);
      });
    });
  },
  data () {
    return {
      anotherid: '2j32hk3h4k',
      mypeerid: null
    }
  },
  methods: {
    connection() {
      var conn = peer.connect(this.anotherid)
      conn.on('open', function () {
        conn.send('hi!');
      })
    }
  }
}
</script>
