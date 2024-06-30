import { getNumberOfCurrencyDigits } from '@angular/common';
import { Injectable } from '@angular/core';

export interface Content {
  path: Path[];
  folders: Element[];
  files: Element[];
}

export interface Element {
  name: string;
  path: string;
}

export interface Path {
  name: string;
  subpath: string;  
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {


  async getContent(src: string): Promise<Content> {

    const path: Path[] =  [
      { 
        name: "root",
        subpath: "/"
      },
      {
        name: "The Beatles",
        subpath: "/The Beatles"
      },
      {
        name: "Rubber Soul",
        subpath: "/The Beatles/Rubber Soul"
      }];

    return {
      path: path,
      folders: [
        {
          name: "Folder A",
          path: "/The Beatles/Rubber Soul/Folder A",
        },
        {
          name: "Folder B",
          path: "/The Beatles/Rubber Soul/Folder B",
        },
      ],
      files: [
        {
          name: "01. Intro.mp3",
          // path: "/The Beatles/Rubber Soul/01. Intro.mp3",
          path: "https://upload.wikimedia.org/wikipedia/commons/7/76/De-MP3.ogg",
        },
        {
          name: "Folder B",
          path: "/The Beatles/Rubber Soul/02. SecondTrack.mp3",
        },
      ],
    };
      
    
  }
}
