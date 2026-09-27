---
title: "Sac Metal Bükümünde K-Faktörü ve İmalat Hatalarını Önleme"
slug: "sac-metal-bukumunde-k-faktoru"
date: "2026-09-27"
category: "Sac Metal"
image: "assets/images/cnc-fabrication.jpg"
description: "Abkant pres bükümlerinde doğru K-faktörü seçimi, sac açınımı çıkarırken neden hayati önem taşır? İmalatta fireyi sıfıra indiren mühendislik hesapları."
tags: ["Sac Bükümü", "Abkant Pres", "K-Faktörü", "SolidWorks", "Tasarım"]
---

# Sac Metal Bükümünde K-Faktörü ve İmalat Hatalarını Önleme

Sac metal parçaların tasarımında en sık karşılaşılan imalat problemlerinden biri, CAD ortamında tasarlanan parçanın büküm sonrasında istenen ölçülerde çıkmamasıdır. Parçanın dış ölçüsü veya delik eksen mesafeleri birkaç milimetre kaydığında, bu durum montaj hattında ciddi aksamalara ve yüksek hurda maliyetlerine yol açar.

Bu sapmanın ana sebebi, sac bükülürken iç kısımların basmaya (kompresyon), dış kısımların ise çekmeye (tansiyon) maruz kalmasıdır. Büküm esnasında boyu değişmeyen hayali nötr eksenin konumunu belirleyen parametre ise **K-Faktörü (K-Factor)** olarak adlandırılır.

## K-Faktörü Nedir?

K-faktörü, nötr eksenin sacın iç büküm yüzeyine olan mesafesinin ($t$), toplam sac kalınlığına ($T$) oranıdır:

$$K = \frac{t}{T}$$

Tipik olarak K-faktörü değeri $0.3$ ile $0.5$ arasında değişir:
- **Hava Bükümü (Air Bending):** Genellikle $K \approx 0.38 - 0.44$
- **Dip Büküm (Bottoming):** Genellikle $K \approx 0.42 - 0.46$
- **Baskı Büküm (Coining):** Genellikle $K \approx 0.50$ (Nötr eksen sac merkezine yaklaşır)

## Yaygın İmalat Hataları ve Çözüm Önerileri

1. **Malzeme Kalitesine Göre Değişimi İhmal Etmek:**
   DKP sac (St37 / S235JR) ile paslanmaz çelik (AISI 304) veya alüminyum (Al 5754) aynı K-faktörüne sahip değildir. Paslanmaz çeliğin akma mukavemeti yüksek olduğu için geri yaylanma (springback) daha fazladır.

2. **Kalıp (V-Kanalı) Genişliğinin Hesaba Katılmaması:**
   V-kanalı genişliği sac kalınlığının 6 ila 8 katı seçilmelidir. Kalıp değiştikçe iç büküm yarıçapı ($R$) ve dolayısıyla nötr eksen kayacaktır.

3. **Deliklerin Büküm Çizgisine Çok Yakın Konumlandırılması:**
   Büküm bölgesindeki deformasyon alanı delikleri ovalleştirir. Büküm hattından delik kenarına olan mesafe en az sac kalınlığının 2 katı ($2T + R$) kadar olmalıdır.

## 3D Tasarım İmalat Olarak Yaklaşımımız

Biz tüm sac metal tasarımlarında atölyede kullanılacak olan abkant pres takımlarını (bıçak ve V kanalı) önceden teyit ederiz. SolidWorks veya Inventor ortamında parçanın sac açınımını rastgele varsayılan değerlerle değil, atölyenin büküm tablosuna göre çıkarırız.

Böylece kesime giden DXF dosyaları tezgaha girdiğinde parça ilk bükümde tam montaj toleransında çıkar.
