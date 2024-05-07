import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/project';
import { DbService } from '../backend-services/db.service';
import { StorageService } from '../backend-services/storage.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-management',
  templateUrl: './portfolio-management.component.html',
  styleUrls: ['./portfolio-management.component.css'],
})
export class PortfolioManagementComponent {
  showCategoryModal: boolean = false;
  showProjectModal: boolean = false;

  categoryForm!: FormGroup;
  projectForm!: FormGroup;

  categories: Category[] = [];

  // common variable
  id_category!: string;
  postedOn_category!: number;
  postedTime_category!: string;

  editMode!: boolean;

  constructor(
    private fb: FormBuilder,
    private db: DbService,
    private storage: StorageService,
    private sanitizer: DomSanitizer
  ) {
    this.categoryForm = this.fb.group({
      id: [],
      title: [''],
      description: [''],
    });
    this.projectForm = this.fb.group({
      title: '',
      description: '',
    });
  }

  openCategoryModal() {
    this.showCategoryModal = true;
  }
  async submitCategoryForm() {
    if (
      !this.categoryForm.controls['title'].value ||
      this.categoryForm.controls['title'].value == null ||
      !this.categoryForm.controls['description'].value ||
      this.categoryForm.controls['description'].value == null
    ) {
      alert('please type the title & description for the category bro');
      return;
    }
    this.id_category = JSON.stringify(new Date().getTime());

    if (this.categoryForm.value.id) {
      this.id_category = this.categoryForm.value.id;
      this.editMode = true;
    }

    this.postedOn_category = new Date().getTime();
    this.postedTime_category = new Date().toLocaleString();

    let category = new Category();

    category.id = this.id_category;
    category.postedOn = this.postedOn_category;
    category.postedTime = this.postedTime_category;
    category.title = this.categoryForm.value.title;
    category.description = this.categoryForm.value.description;

    let categoryResult = await this.db.save(
      'Cateogry',
      this.id_category,
      JSON.parse(JSON.stringify(category))
    );
    try {
      if (categoryResult.Success) {
        if (this.editMode == true) {
          alert('Category edited successfully 👌🏽');
        } else {
          alert('Category added successfully 👌🏽');
        }
        this.categoryForm.reset();
        window.location.reload();
      }
    } catch {
      alert('Could not add or edit the cateogory 🚫');
    }
  }
  closeCategoryModal() {
    this.showCategoryModal = false;
  }

  openProjectModal() {
    this.showProjectModal = true;
  }
  submitProjectForm() {}
  closeProjectModal() {
    this.showProjectModal = false;
  }
}
