<template>
  <div>
    <v-btn ref="pB"@click.native="pushButton"></v-btn>
  </div>
</template>
<script >
let swRegistration = null;
export default {
  data () {
    return {
      applicationServerPublicKey: 'BI_RiXwW6riXTA0VJi_Iqbqy-R8Hx9dtq-KxMpekAZK9Eu6b6UIJo6PqIZenj6uu8XtRkNrNwBibfqL2JsCtK6Q',
      isSubscribed: false
    }
  },
  created() {
    //do something after creating vue instance

  },
  mounted () {
    navigator.serviceWorker.register('index.vue')
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;
      // initializeUI();
    })

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      console.log('Service Worker and Push is supported');
      navigator.serviceWorker.register('index.vue')
      .then(function(swReg) {
        console.log('Service Worker is registered', swReg);

        swRegistration = swReg;
      })
      .catch(function(error) {
        console.error('Service Worker Error', error);
      });
    } else {
      console.warn('Push messaging is not supported');
      pushButton.textContent = 'Push Not Supported';
    }
    // console.log(​PushManager.getSubscription());

    navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
      console.log('dfdf')
    serviceWorkerRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        console.log('dfdf')
      })
    })

    // this.initializeUI()
  },
  methods: {
    urlB64ToUint8Array (base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
    initializeUI () {
      swRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        this.isSubscribed = !(subscription === null);

        if (this.isSubscribed) {
          console.log('User IS subscribed.');
        } else {
          console.log('User is NOT subscribed.');
        }

        this.updateBtn();
      });
    },
    pushButton () {
      this.$refs.pB.disabled = true
      if (this.isSubscribed) {
        this.unsubscribeUser();
      } else {
        this.subscribeUser();
      }
    },
    updateBtn () {
      if (Notification.permission === 'denied') {
        this.$refs.pB.textContent = 'Push Messaging Blocked.';
        this.$refs.pB.disabled = true;
        this.updateSubscriptionOnServer(null);
        return;
      }
      if (this.isSubscribed) {
        this.$refs.pB.textContent = 'Disable Push Messaging';
      } else {
        this.$refs.pB.textContent = 'Enable Push Messaging';
      }
      this.$refs.pB.disabled = false;
    },
    subscribeUser () {
      const applicationServerKey = this.urlB64ToUint8Array(this.applicationServerPublicKey);
      swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      })
      .then(function(subscription) {
        console.log('User is subscribed.');

        this.updateSubscriptionOnServer(subscription);

        this.isSubscribed = true;

        this.updateBtn();
      })
      .catch(function(err) {
        console.log('Failed to subscribe the user: ', err);
        this.updateBtn();
      });
    },
    unsubscribeUser () {
      swRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        if (subscription) {
          return subscription.unsubscribe();
        }
      })
      .catch(function(error) {
        console.log('Error unsubscribing', error);
      })
      .then(function() {
        this.updateSubscriptionOnServer(null);

        console.log('User is unsubscribed.');
        this.isSubscribed = false;

        updateBtn();
      });
    },
    updateSubscriptionOnServer (subscription) {
    //  const subscriptionJson = document.querySelector('.js-subscription-json');
      // const subscriptionDetails =
      //   document.querySelector('.js-subscription-details');
      //
      //if (subscription) {
        //subscriptionJson.textContent = JSON.stringify(subscription);
      //   subscriptionDetails.classList.remove('is-invisible');
      // } else {
      //   subscriptionDetails.classList.add('is-invisible');
      // }
    }
  }
}
</script>
