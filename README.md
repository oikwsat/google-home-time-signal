Google Home Time Signal
====

Google Home Time Signal is for Google Home.

Google Home talks about hours.

## Install
+ $ git clone
+ $ npm install
+ $ vi node_modules/mdns/lib/browser.js
  + Find this line:
    ```
    Browser.defaultResolverSequence = [
      rst.DNSServiceResolve(), 'DNSServiceGetAddrInfo' in dns_sd ? rst.DNSServiceGetAddrInfo() : rst.getaddrinfo(), rst.makeAddressesUnique()
    ];
    ```
  + And change to:
    ```
    Browser.defaultResolverSequence = [
        rst.DNSServiceResolve(), 'DNSServiceGetAddrInfo' in dns_sd ? rst.DNSServiceGetAddrInfo() : rst.getaddrinfo({families:[4]}), rst.makeAddressesUnique()
    ];
    ```
+ $ npm start

## Using systemctl
+ $ sudo vi /etc/systemd/system/timesignal.service 
    ```
    [Unit]
    Description=Google Home Time Signal

    [Service]
    ExecStart=/usr/local/bin/node app.js
    Restart=always
    WorkingDirectory=<<Install Path>>

    [Install]
    WantedBy=multi-user.target
    ```
+ $ sudo systemctl enable timesignal
+ $ sudo systemctl start timesignal

## use summary npm modules
- [google-home-notifier](https://github.com/noelportugal/google-home-notifier)
- [node-cron](https://github.com/kelektiv/node-cron)
