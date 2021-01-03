import Vue from "vue";
import VueRouter from "vue-router";
import EmployeeDetails from "../views/EmployeeDetails.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/employee-details",
        name: "Employee Details",
        component: EmployeeDetails,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
