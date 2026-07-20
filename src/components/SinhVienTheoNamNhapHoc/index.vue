<template>
    <div class="row">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="input-group">
                                    <span class="input-group-text">Từ năm</span>
                                    <input v-model="thong_ke.tu_nam" type="number" min="2000" max="2100" step="1"
                                        class="form-control" placeholder="Từ năm: 2018">
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="input-group">
                                    <span class="input-group-text">Đến năm</span>
                                    <input v-model="thong_ke.den_nam" type="number" min="2000" max="2100" step="1"
                                        class="form-control" placeholder="Đến năm: 2023">
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <button class="btn btn-primary w-100" @click="loadData()">Thống Kê</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mt-2">Thống kê sinh viên theo năm nhập học</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Năm Nhập học</th>
                                    <th class="text-center">Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(v, k) in list_data" :key="k">
                                    <td class="text-center">{{ k + 1 }}</td>
                                    <td class="text-center">{{ v.nam_nhap_hoc }}</td>
                                    <td class="text-center">{{ v.so_luong_sinh_vien }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h5 class="mt-2">Biểu đồ thống kê</h5>
                    </div>
                    <div class="card-body">
                        <Bar v-if="loaded" :data="chartData" :options="chartOptions" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    components: {
        Bar
    },
    data() {
        return {
            loaded: false,
            thong_ke: {
                tu_nam: '',
                den_nam: ''
            },
            list_data: [],
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Số lượng sinh viên',
                        data: []
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios
                .post('http://127.0.0.1:8000/api/admin/thong-ke/sinh-vien-theo-nam-nhap-hoc', this.thong_ke)
                .then((res) => {
                    if (res.data.status) {
                        this.chartData = res.data.data;
                        this.list_data = res.data.list;
                        this.loaded = true;
                    }
                })
                .catch((error) => {
                    console.error("Lỗi khi tải dữ liệu thống kê:", error);
                });
        }
    }
}
</script>