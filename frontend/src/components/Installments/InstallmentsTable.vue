<script setup>
import { defineProps, ref } from "vue";
import ShowModal from "./ShowModal";
let page = 1;
let tot = 1;
const props = defineProps(["showEditModal", "deletProduct", "installments"]);
const showEditModal = () => {
  props.showEditModal();
};
let appartment = ref({});
let isShowModal = ref(false);
const show = (app) => {
  isShowModal.value = true;
  appartment = app;
};
const closeShowModal = () => {
  isShowModal.value = false;
};
// const deletProduct = () => {
//   props.deletProduct();
// };
</script>
<template>
  <div>
    <div class="table w-full">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3 text-center">الرقم</th>
              <th scope="col" class="px-6 py-3 text-center">اسم الؤجر</th>
              <th scope="col" class="px-6 py-3 text-center">رقم الجوال</th>
              <th scope="col" class="px-6 py-3 text-center">تاريخ البداية</th>
              <th scope="col" class="px-6 py-3 text-center">تاريخ النهاية</th>
              <th scope="col" class="px-6 py-3 text-center">الضمان</th>
              <th scope="col" class="px-6 py-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(app, index) in installments"
              :key="app.id"
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ ++index }}
              </th>
              <td class="px-6 py-4 text-center">
                {{ app?.installment_user_register?.name }}
              </td>
              <td class="px-6 py-4 text-center">
                {{ app?.installment_user_register?.phone }}
              </td>
              <td class="px-6 py-4 text-center">
                {{ app?.installment_start_date }}
              </td>
              <td class="px-6 py-4 text-center">
                {{ app?.installment_end_date }}
              </td>
              <td class="px-6 py-4 text-center flex justify-center">
                {{ app?.is_guarantee ? "يوجد" : "لايوجد" }}
              </td>
              <td class="px-6 py-4">
                <button
                  @click="show(app)"
                  type="button"
                  class="font-medium mx-4 text-green-600 dark:text-blue-500 hover:underline"
                >
                  عرض
                </button>
                <button
                  @click="showEditModal(app)"
                  type="button"
                  class="font-medium mx-4 text-blue-600 dark:text-blue-500 hover:underline"
                >
                  تعديل
                </button>
                <!-- <button
                @click="deletProduct(app)"
                type="button"
                class="font-medium text-red-600 mx-2 dark:text-red-500 hover:underline"
              >
                حذف
              </button> -->
              </td>
            </tr>
          </tbody>
        </table>

        <nav class="flex justify-center my-4" v-if="tot > 1">
          <ul class="inline-flex -space-x-px text-base h-10">
            <li
              v-for="page_number in tot"
              @click="handlePagination(page_number)"
              :key="page_number"
            >
              <a
                :class="{
                  'bg-blue-600 text-white hover:text-gray-100 hover:bg-blue-900 ':
                    page_number == page,
                }"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >{{ page_number }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <ShowModal
      :isShowAddModal="isShowModal"
      :app="appartment"
      :closeShowModal="closeShowModal"
    />
  </div>
</template>
