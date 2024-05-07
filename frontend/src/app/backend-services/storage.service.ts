import { Injectable } from '@angular/core';
import firebase from 'firebase';
import * as moment from 'moment';
import { environment } from '../environments/environment';

@Injectable()
export class StorageService {
  constructor() {}

  async uploadImageFileAndGetUrl(file: File) {
    try {
      let path = 'images/' + Date.now().toString();
      const storageRef = firebase.storage().ref();
      // Create the file metadata
      const metadata = {
        contentType: 'image/*',
      };

      const fileRef = storageRef.child(path);

      const uploadTaskSnapshot = await fileRef.put(file, metadata);

      const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();

      if (downloadURL.startsWith('http')) {
        return { Success: true, Data: downloadURL };
      } else {
        return { Success: false, Data: 'Upload unsuccessful' };
      }
    } catch (e) {
      return { Success: false, Data: e };
    }
  }
  async uploadBase64AndGetUrl(file: string) {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(environment.firebaseConfig);
      }
      let monthPath = moment(Date.now()).format('LL');
      let path = 'images/' + monthPath + '/' + Date.now().toString();
      const storageRef = firebase.storage().ref();
      // Create the file metadata
      const metadata = {
        contentType: 'image/*',
      };

      const fileRef = storageRef.child(path);

      let strImage = file.replace(/^data:image\/[a-z]+;base64,/, '');

      const uploadTaskSnapshot = await fileRef.putString(strImage, 'base64', {
        contentType: 'image/*',
      });

      const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();

      if (downloadURL.startsWith('http')) {
        return { Success: true, Data: downloadURL };
      } else {
        return { Success: false, Data: 'Upload unsuccessful' };
      }
    } catch (e) {
      return { Success: false, Data: e };
    }
  }
}
