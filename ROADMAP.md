# KINH DỊCH - Trạng thái dự án

## Dữ liệu

✅ dan-nhap.json

✅ bat-quai.json

✅ index.json

✅ 001 → 064 Quẻ Dịch


## Chuẩn dữ liệu

  .json
{
  "loai": "",
  "nguon": "",
  "du_lieu": {},
  "ghi_chu": "",
  "phien_ban": ""
}

## Quy ước dữ liệu
{
  "loai": "",
  "nguon": "",
  "du_lieu": {},
  "ghi_chu": "",
  "phien_ban": ""
}

## Ghi chú

Mục tiêu dự án:

Thư viện tra cứu Kinh Dịch
Không bói toán
Không tiên tri
Không phán vận mệnh
Tập trung vào học tập, nghiên cứu và đối chiếu

## Nguồn tham khảo

✅ Dịch Kinh Đại Toàn Tập 1 - Yếu Chỉ

✅ Dịch Kinh Đại Toàn Tập 2 - Thượng Kinh

✅ Dịch Kinh Đại Toàn Tập 3 - Hạ Kinh

## Lệnh khởi động phiên làm việc

Repo:

https://phsg25.github.io/kinh-dich/

Đọc ROADMAP.md và tiếp tục dự án từ trạng thái hiện tại.

## Repo Github

https://github.com/phsg25/kinh-dich

# Checkpoint Beta 2.0

## Hạ tầng

✅ Github Pages

✅ JSON động

✅ App.js ổn định

✅ CSS ổn định

✅ Mobile UI ổn định

---

## Chức năng

✅ Dẫn nhập

✅ Bát Quái

✅ Quẻ Dịch

✅ Danh sách Quẻ Dịch

✅ Tra cứu V2

✅ Hiển thị nội dung mở rộng

---

## Dữ liệu

✅ 64 / 64 quẻ

✅ Kiểm thử điều hướng 64 quẻ

✅ Đồng bộ dữ liệu

✅ Hoàn thiện schema V2

---

## Nội dung V2

✅ 64 / 64 quẻ

Bao gồm:

- Quái Từ
- Thoán Truyện
- Tượng Truyện
- Các Hào

---

## Schema hiện tại

```json
{
  "loai": "que",
  "nguon": "",
  "du_lieu": {
    "id": 0,
    "ten": "",
    "han": "",
    "tuong": "",
    "tinh_chat": "",
    "ngu_hanh": "",
    "quai_tu": "",
    "thoan_truyen": "",
    "tuong_truyen": "",
    "hao": []
  },
  "ghi_chu": "",
  "phien_ban": "2.0"
}

