import React from 'react'
import AES from 'crypto-js/aes';
import { enc, lib, mode, pad } from 'crypto-js';
import _ from 'lodash';

const SECRET_KEY = 'VSNeYilDCImX0hqT4avYLdsKmFIR7hojhi+zBKM35D7=';

const useDecryptService = (token, iv) => {
    const key = enc.Base64.parse(SECRET_KEY);
    const parsedIV = enc.Base64.parse(iv);

    const decrypted = AES.decrypt(token, key, {
        iv: parsedIV,
        mode: mode.CBC,
        padding: pad.Pkcs7,
        blockSize: 16,
    });

    return _.replace(decrypted.toString(enc.Utf8), /\0/g, '');
}

export default useDecryptService