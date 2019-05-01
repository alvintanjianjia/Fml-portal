import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../_services/index';
import { Users} from '../_models/index';
import { file_model } from '../_models/index';
import { Headers,Http, Response } from '@angular/http';
import * as FileSaver from 'file-saver';



@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
    selectedFiles: FileList;
    currentFileUpload: File;
    
    progress: { percentage: number } = { percentage: 0};
    private baseUrl = 'http://localhost:8080/api';
    listFiles: any[] = [];
    currentUser: string;
    private uploadedFiles: any[] = [];
    private uploadedFile: Promise<string[]>;
    
    isDataLoadedImage: boolean = false;
    isDataLoadedText: boolean = false;
    
  constructor(private uploadService: UploadFileService,
              private user: Users,
              private http: Http,
              
             
  ) { }

  ngOnInit() {
      this.getAllImageFiles();
      var currentUser = JSON.parse(localStorage.getItem("currentUser"));
      var user = JSON.parse(currentUser['_body']);
      this.currentUser = user.username;
      
  }
  
  
  selectFile(event) {
      const file = event.target.files.item(0);
      console.log(file);
      if (file.type.match('text.*') || file.type.match('image.*')) {
        this.selectedFiles = event.target.files;
      } else {
        alert('invalid format!');
      }
    }
   
    upload() {
      this.progress.percentage = 0;
   
      this.currentFileUpload = this.selectedFiles.item(0)
      this.user = JSON.parse(localStorage.getItem("currentUser"));
      this.uploadService.pushFileToStorage(this.currentFileUpload);
      this.selectedFiles = undefined;
      location.reload();
    }
    
    download() {
        this.uploadService.downloadAllFiles();
    }
    
    getAllImageFiles(): Promise<string[]> {
        
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var user = JSON.parse(currentUser['_body']);
        
        
        return this.http.post(this.baseUrl + '/list-all-image-files-byusername', user.username).toPromise()
        .then(response => {this.listFiles = response.json();
                           console.log(this.listFiles);
                           this.isDataLoadedImage = true;
                           return response.json();})
        .catch(this.handleError);
        
    }
    
    getAllTextFiles(): Promise<string[]> {
        
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var user = JSON.parse(currentUser['_body']);
        
        
        return this.http.post(this.baseUrl + '/list-all-text-files-byusername', user.username).toPromise()
        .then(response => {this.listFiles = response.json();
                           console.log(this.listFiles);
                           this.isDataLoadedText = true;
                           return response.json();})
        .catch(this.handleError);
        
    }
    
    downloadImage() {
        var saveAs: any;
        let file = new Blob(['hello world'], { type: 'text/csv;charset=utf-8' });
        FileSaver.saveAs(file, 'helloworld.txt')
    }
    
    
    deleteFile(filename,username) {
        let formdata: FormData = new FormData();
        formdata.append('filename', filename);
        formdata.append('username',username);
        return this.http.post(this.baseUrl + '/delete-file-by-filename/' , formdata).toPromise()
            .then(response => location.reload())
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise <any> {
        console.error('Error occured at file upload.',error);
        return Promise.reject(error);
    }
    
    test() {
        console.log(this.listFiles);
        console.log(this.listFiles[0]);
    }
    
    showfiles() {
        this.uploadedFile = this.uploadService.getFiles();
        console.log(this.uploadedFile);
    }

}
