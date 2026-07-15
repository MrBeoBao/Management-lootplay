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
                                    <input type="number" min="2000" max="2100" step="1" class="form-control"
                                        placeholder="Từ năm: 2018">
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="input-group">
                                    <span class="input-group-text">Đến năm</span>
                                    <input type="number" min="2000" max="2100" step="1" class="form-control"
                                        placeholder="Đến năm: 2023">
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <button class="btn btn-primary w-100">Thống Kê</button>
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
                        <h5 class="mt-2">Thống kê sinh viên theo từng khoa</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Tên khoa</th>
                                    <th class="text-center">Số lượng SV</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Kế Toán</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Công Nghệ Thông Tin</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Điện-Điện Tử</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">

                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>