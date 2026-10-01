---
title: 'Üretime Uygun Tasarım (DFM): Parçanız Çizimde Değil, Atölyede Kazanır'
slug: uretime-uygun-tasarim-dfm
date: 2026-10-01
category: Tasarım & Mühendislik
image: /assets/images/Üretime Uygun Tasarım_ CAD’den İmalata.png
description: |-
  Ekranda kusursuz görünen bir 3D model, atölyeye indiğinde pahalı, yavaş ve sorunlu bir parçaya dönüşebilir. Çünkü CAD ortamında her şey mümkündür; atölyede ise takımın ulaşabildiği, makinenin büktüğü, kaynakçının elinin sığdığı kadarı gerçektir.

  Üretime uygun tasarım (DFM – Design for Manufacturing), parçayı tasarlarken üretim yöntemini baştan hesaba katma yaklaşımıdır. Amaç, işlevden ödün vermeden parçayı daha ucuz, daha hızlı ve daha az hatayla üretmektir.
tags:
  - Mühendislik
  - Tasarım
  - İmalat
---

### Neden bu kadar önemli?

Bir tasarım hatasının maliyeti, ilerleyen aşamalarda katlanarak artar. Çizim aşamasında bir radyüsü değiştirmek birkaç dakikadır. Aynı hatayı kesilmiş sac, işlenmiş parça ya da kaynatılmış konstrüksiyon üzerinde fark ettiğinizde bu, fire, yeniden işleme ve teslimat gecikmesi demektir.

Tasarım aşamasında verdiğiniz kararlar, üretim maliyetinin büyük bölümünü belirler. Atölyede yapılabilecek iyileştirmeler ise çok daha sınırlıdır.

### Genel DFM ilkeleri

**1. Basit olan kazanır.** Her ek özellik (cep, yarık, farklı radyüs) ek bir operasyon, ek bir takım veya ek bir kontrol demektir. "Bu özellik gerçekten gerekli mi?" sorusunu sormak, en ucuz maliyet düşürme yöntemidir.

**2. Toleransı gerektiği kadar sıkı verin.** Her yüzeye ±0,01 vermek kolaydır; ama tolerans sıkılaştıkça maliyet katlanarak artar. Sadece montaj veya fonksiyon açısından kritik ölçülerde sıkı tolerans kullanın, geri kalanında genel tolerans tablosuna güvenin.

**3. Standart malzeme ve ölçüleri tercih edin.** Piyasada hazır bulunan sac kalınlıkları, profil ölçüleri ve standart bağlantı elemanları hem tedarik süresini hem fiyatı düşürür. Özel ölçü, özel sipariş ve minimum alım miktarı demektir.

**4. Standart takımlarla üretilebilecek geometri çizin.** Özel takım gerektiren her detay, hem maliyeti hem süreyi artırır.

**5. Montajı da tasarlayın.** Parça tek başına üretilebilir olabilir ama monte edilemiyorsa tasarım başarısızdır. Cıvata ve anahtar erişimi, kaynak torcunun girebileceği boşluk, hizalama referansları baştan düşünülmelidir.

### Sac metal tasarımında dikkat edilecekler

- **Büküm yarıçapı:** İç büküm yarıçapını sac kalınlığına yakın tutun. Çok keskin radyüs çatlama riski yaratır. Bükümle ilgili hesapları K-faktörü yazımızda detaylı anlattık.
- **Delik ile büküm arasındaki mesafe:** Delik bükümün çok yakınındaysa büküm sırasında deforme olur. Genel kural olarak delik kenarını büküm hattından en az sac kalınlığının birkaç katı kadar uzak tutun.
- **Büküm rölyefleri:** Köşelerde ve büküm bitişlerinde rölyef açın; yırtılmayı önler.
- **Tüm bükümlerde aynı yarıçap:** Tek bir takımla tüm bükümleri yapabilmek, takım değişimi süresini ortadan kaldırır.
- **Büküm yönünü düşünün:** Aynı parçada bükümlerin farklı yönlere yapılması, parçanın sürekli çevrilmesi demektir.
- **Lazer kesim için:** Çok dar yarıklar ve sac kalınlığından küçük delikler kalite sorununa yol açabilir.

### Talaşlı imalat tasarımında dikkat edilecekler

- **İç köşelere radyüs verin.** Freze takımı yuvarlaktır, dolayısıyla keskin iç köşe işlenemez. Radyüsü takım çapına uygun seçin ve mümkünse tüm iç köşelerde aynı değeri kullanın.
- **Derin ve dar cepten kaçının.** Cep derinliği, takım çapının birkaç katını aştıkça titreşim, takım kırılması ve maliyet artar.
- **Tek kurulumda işlenebilirlik:** Parçanın mümkün olduğunca az bağlamada işlenmesini sağlayın. Her yeniden bağlama hem süre hem hizalama hatası riskidir.
- **Delik standartlarına uyun:** Standart matkap çaplarını kullanın. Kör deliklerde derinlik ile çap oranını makul tutun ve diş açılacaksa diş dibinde boşluk bırakın.
- **Gereksiz yüzey kalitesi istemeyin.** Her yüzeye ince yüzey pürüzlülüğü yazmak, ek taşlama veya finiş operasyonu demektir.

### Kaynaklı konstrüksiyonda dikkat edilecekler

- **Kaynağa erişim:** Torcun ve kaynakçının eli ulaşamıyorsa o dikiş sağlıklı atılamaz. Modelde bu erişimi mutlaka kontrol edin.
- **Isı çarpılması:** Simetrik kaynak planı ve dengeli dikiş dağılımı, çarpılmayı azaltır.
- **Gereksiz dikiş boyutu:** Gerekenden büyük kaynak dikişi hem maliyet hem çarpılma demektir. Dikişi yük hesabına göre boyutlandırın.
- **Parçaları kendiliğinden hizalanacak şekilde tasarlayın.** Geçmeli (tab-slot) tasarımlar, kaynak öncesi fikstür ihtiyacını azaltır.
- **Kaynak sonrası işleme payı:** Kaynaktan sonra işlenecek yüzeylerde çarpılmayı hesaba katarak pay bırakın.

### Tasarım bitmeden önce kontrol listesi

1. Bu parça hangi yöntemle üretilecek ve tasarım o yönteme uygun mu?
2. Standart malzeme, standart ölçü ve standart takım kullanıldı mı?
3. Gereksiz özellik, gereksiz tolerans, gereksiz yüzey kalitesi var mı?
4. Tüm bükümler, kaynaklar ve cıvata noktaları erişilebilir mi?
5. Üretimi yapacak atölyeyle (ya da en azından onların kurallarıyla) fikir alışverişi yapıldı mı?

### Sonuç

DFM bir tasarım kısıtı değil, bir avantajdır. Üretimi bilen tasarımcı, hem müşterisine daha uygun fiyat sunar hem de atölyede "bu böyle yapılmaz" diye geri dönen çizimlerin sayısını azaltır. En iyi tasarım, ekranda en karmaşık olan değil, atölyede en sorunsuz üretilen tasarımdır.

Projeniz için üretime uygun tasarım desteğine ihtiyacınız varsa bizimle iletişime geçebilirsiniz.
