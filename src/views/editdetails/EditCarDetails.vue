<template>
    <v-container>
      <v-row>
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-select
              ref="select"
              v-model.lazy="name"
              :items="modalarray"
              :rules="[(v) => !!v || 'Item is required']"
              label="Car Name"
              required
            ></v-select>
  
            <v-text-field
              v-model.lazy="modal"
              :rules="nameRules"
              label="Modal Name"
              required
            ></v-text-field>
  
            <v-text-field
              v-model.lazy="price"
              :rules="nameRules"
              label="Price"
              type="number"
              required
            ></v-text-field>
  
            <v-file-input label="File input" v-model.lazy="mainImage">
            </v-file-input>
            <!-- <v-btn>upload</v-btn> -->
  
            <v-file-input
              v-model.lazy="currFiles"
              small-chips
              show-size
              multiple
              clearable
              label="Add files"
              @change="inputChanged"
            >
              <template v-slot:selection="{ text, index }">
                <v-chip
                  small
                  text-color="white"
                  color="#295671"
                  close
                  @click:close="remove(index)"
                >
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
            <div v-if="files.length">
              <h5>All files</h5>
              <v-chip v-for="f in files" :key="f.length" class="mr-1">
                {{ f.name }}
              </v-chip>
              <!-- <div class="py-3">
              <v-btn>Upload all</v-btn>
              </div> -->
            </div>
  
            <v-textarea label="Label" v-model="description"></v-textarea>
  
            <v-text-field
              v-model="uploadedOn"
              :rules="nameRules"
              label="Uploaded On"
              type="date"
              required
            ></v-text-field>
            <v-text-field
              v-model="year"
              :rules="nameRules"
              label="Year"
              type="year"
              required
            ></v-text-field>
            <v-select
              ref="select"
              v-model.lazy="fuel"
              :items="fuelarray"
              :rules="[(v) => !!v || 'Item is required']"
              label="Fuel"
              required
            ></v-select>
  
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click.prevent="validate"
            >
              Validate
            </v-btn>
  
            <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
  
            
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import carmodal from "../../json/cars.json";
  export default {
    data: () => ({
      valid: true,
  
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
  
      name: "",
      modal: "",
      price: "",
  
      description: "",
      uploadedOn: "",
      year: "",
      fuel: "",
      fuelarray: ["Petrol", "Diesel", "Gas"],
      mainImage: null,
      files: [],
      currFiles: [],
      select: null,
  
      checkbox: false,
    }),
  
    methods: {
      upload() {
        const fd = new FormData();
        fd.append("image", this.files[0], this.files[0].name);
        console.log(fd);
      },
  
      validate() {
        this.$refs.form.validate();
        console.log("kkkkkkk");
        this.reset()
      },
      reset() {
        this.$refs.form.reset();
      },
  
  
      remove(index) {
        this.files.splice(index, 1);
      },
      inputChanged() {
        console.log(this.files);
        this.files = [...this.currFiles, ...this.files];
      },
    },
  
    computed: {
      // function for get  carname array
      modalarray() {
        let car = carmodal.map((data) => {
          return data.carName;
        });
        return car;
      },
    },
    
  };
  </script>
  
  