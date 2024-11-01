
# Faktöriyel Hesaplayıcı

## Proje Açıklaması
Bu proje, kullanıcıdan pozitif bir tam sayı alarak bu sayının faktöriyelini hesaplayan bir uygulamadır. 
Kullanıcıya sonucu gösterir ve ardından kullanıcıya başka bir sayı girip girmeyeceği sorulur. 
Eğer kullanıcı devam etmek isterse, program döngüye yeniden başlar; istemezse program sona erer.

### Faktöriyel Nedir?
Faktöriyel, bir sayının kendisi dahil, tüm pozitif tam sayıların çarpımıdır. 
Örneğin, `5! = 5 x 4 x 3 x 2 x 1 = 120` olarak hesaplanır.

## Proje Akışı
1. **Kullanıcıdan Sayı Alma**:
   - `prompt()` ile kullanıcıdan pozitif bir tam sayı girmesi istenir.

2. **Giriş Kontrolleri**:
   - Kullanıcının geçerli bir sayı girip girmediği `isNaN()` fonksiyonu ile ve negatiflik durumu kontrol edilir.
   - Geçersiz giriş durumunda, kullanıcıya "Lütfen geçerli bir pozitif tam sayı girin." mesajı gösterilir.

3. **Faktöriyel Hesaplama**:
   - Girilen pozitif tam sayının faktöriyeli, `for` döngüsü ile hesaplanır.

4. **Sonucu Gösterme**:
   - Hesaplanan faktöriyel sonucu `alert()` ile kullanıcıya gösterilir.

5. **Devam Etme Sorgusu**:
   - Kullanıcıya başka bir faktöriyel hesaplamak isteyip istemediği `confirm()` ile sorulur.
   - "Tamam" seçilirse döngü yeniden başlar; "İptal" seçilirse program sona erer.

6. **Döngü**:
   - Kullanıcı "İptal"e basana kadar `do-while` döngüsü devam eder.

## Kullanılan Değişkenler ve Fonksiyonlar

- **Değişkenler**:
  - `sayi`: Kullanıcının girdiği sayıyı tutar.
  - `faktoriyel`: Hesaplanan faktöriyel sonucunu depolar.
  - `devamEt`: Kullanıcının devam etmek isteyip istemediğini kontrol eder.

- **Fonksiyonlar**:
  - `prompt()`: Kullanıcıdan giriş almak için kullanılır.
  - `alert()`: Hesaplanan sonucu kullanıcıya bildirmek için kullanılır.
  - `confirm()`: Kullanıcıya "Tamam" veya "İptal" seçeneklerini sunar.

- **Operatörler ve Koşullar**:
  - `%`: Mod alma işlemi.
  - `for` döngüsü: Faktöriyel hesaplama için 1’den `sayi`ya kadar olan sayıları çarpar.
  - `if-else`: Girişin geçerli bir sayı olup olmadığını kontrol eder.
  - `do-while` döngüsü: Döngü devam etme isteğine bağlı çalışır.
"""
