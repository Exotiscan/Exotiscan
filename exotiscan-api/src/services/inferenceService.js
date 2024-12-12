const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/InputError");

async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeImage(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims(0)
      .toFloat()
      .div(tf.scalar(255.0));

    const classes = [
      "Bekantan",
      "Beruang Madu",
      "Cendrawasih",
      "Burung Jalak Bali",
      "Burung Rangkong Badak",
      "Elang Jawa",
      "Gajah Sumatra",
      "Harimau Sumatra",
      "Kakatua Jambul Kuning",
      "Komodo",
      "Kupu-Kupu Raja",
      "Orangutan Kalimantan",
      "Owa Jawa",
      "Siamang",
    ];

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    let commonName,
      scientificName,
      description,
      characteristics,
      habitat,
      classification,
      family,
      scarcityLevel,
      remainingAmount,
      eatingType,
      animalImage;
    funFact;

    if (label === "Bekantan") {
      commonName = "Bekantan";
      scientificName = "Nasalis larvatus";
      description =
        "Bekantan adalah monyet dengan hidung besar yang ditemukan di Kalimantan.";
      characteristics = "Hidung besar, jari panjang, bulu cokelat keemasan.";
      habitat = "Hutan bakau dan rawa-rawa di Kalimantan dan sekitarnya.";
      classification = "Mammalia";
      family = "Cercopithecidae";
      scarcityLevel = "Endangered";
      remainingAmount = "Kurang dari 25.000 ekor";
      eatingType = "Omnivora";
      funFact =
        "Bekantan dapat menyelam hingga 20 meter untuk menghindari predator.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/Bekantan/Image_1.jpg";
    } else if (label === "Beruang Madu") {
      commonName = "Beruang Madu";
      scientificName = "Helarctos malayanus";
      description =
        "Beruang Madu adalah beruang terkecil di dunia, berasal dari Asia Tenggara, termasuk Indonesia (Kalimantan dan Sumatra).";
      characteristics =
        "Bercak berbentuk setengah lingkaran berwarna kuning/oranye di dada.";
      habitat = "Hutan tropis dataran rendah.";
      classification = "Mammalia";
      family = "Ursidae";
      scarcityLevel = "Vulnerable";
      remainingAmount =
        "Populasi sulit diperkirakan, diperkirakan hanya beberapa ribu individu.";
      eatingType = "Karnivora";
      funFact =
        "Beruang Madu memiliki lidah panjang hingga 25 cm untuk menjilat madu dari sarang lebah.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/BeruangMadu/Image_1.jpg";
    } else if (label === "Cendrawasih") {
      commonName = "Cendrawasih";
      scientificName = "Paradisaea spp.";
      description =
        "Cendrawasih adalah burung endemik yang ditemukan di Papua, Indonesia, dan Papua Nugini.";
      characteristics =
        "Bulu berwarna cerah dengan ekor panjang dan indah, sering kali berwarna merah, kuning, atau hijau.";
      habitat = "Hutan hujan tropis di Papua dan sekitarnya.";
      classification = "Aves";
      family = "Paradisaeidae";
      scarcityLevel = "Vulnerable";
      remainingAmount =
        "Populasi menurun akibat perburuan dan perusakan habitat.";
      eatingType = "Omnivora";
      funFact =
        "Cendrawasih terkenal dengan tarian ritualnya yang menakjubkan selama musim kawin.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/Cendrawasih/Image_1.jpg";
    } else if (label === "Burung Jalak Bali") {
      commonName = "Burung Jalak Bali";
      scientificName = "Leucopsar rothschildi";
      description =
        "Burung Jalak Bali adalah spesies burung endemik Bali dengan warna bulu putih mencolok.";
      characteristics =
        "Tubuh kecil, bulu putih bersih, wajah biru tanpa bulu.";
      habitat = "Hutan tropis di Bali, Indonesia.";
      classification = "Aves";
      family = "Sturnidae";
      scarcityLevel = "Critically Endangered";
      remainingAmount = "Sekitar 50 ekor";
      eatingType = "Omnivora";
      funFact =
        "Jalak Bali memiliki kicauan yang indah dan aktif berinteraksi dengan manusia.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/BurungJalakBali/Image_1.jpg";
    } else if (label === "Burung Rangkong Badak") {
      commonName = "Burung Rangkong Badak";
      scientificName = "Buceros rhinoceros";
      description =
        "Burung Rangkong Badak adalah burung endemik yang ditemukan di hutan-hutan tropis Sumatra, Kalimantan, dan Malaysia.";
      characteristics =
        "Paruh besar berbentuk seperti tanduk badak dengan tubuh berwarna hitam dan putih serta bulu leher kekuningan.";
      habitat = "Hutan hujan tropis yang lebat.";
      classification = "Aves";
      family = "Bucerotidae";
      scarcityLevel = "Endangered";
      remainingAmount =
        "Populasi terus menurun, dengan data pasti sulit didapatkan.";
      eatingType = "Omnivora";
      funFact =
        "Burung Rangkong Badak bersarang dalam pohon dan membuat lubang yang hanya bisa diakses oleh burung jantan.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/BurungRangkongBadak/Image_1.jpg";
    } else if (label === "Elang Jawa") {
      commonName = "Elang Jawa";
      scientificName = "Nisaetus bartelsi";
      description =
        "Elang Jawa adalah spesies burung pemangsa yang endemik di hutan-hutan pulau Jawa, Indonesia.";
      characteristics =
        "Memiliki tubuh besar dengan bulu berwarna coklat kemerahan dan putih di bagian dada serta perut.";
      habitat = "Hutan tropis dan pegunungan di Jawa.";
      classification = "Aves";
      family = "Accipitridae";
      scarcityLevel = "Critically Endangered";
      remainingAmount =
        "Populasi sangat terbatas, diperkirakan hanya ada beberapa individu yang tersisa di alam liar.";
      eatingType = "Karnivora";
      funFact =
        "Elang Jawa merupakan salah satu spesies burung yang sangat jarang terlihat, dengan sebagian besar hidup di kawasan pegunungan Jawa.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/ElangJawa/Image_1.jpg";
    } else if (label === "Gajah Sumatra") {
      commonName = "Gajah Sumatra";
      scientificName = "Elephas maximus sumatranus";
      description =
        "Gajah Sumatra adalah subspesies gajah Asia yang hanya ditemukan di Pulau Sumatra.";
      characteristics =
        "Tubuh lebih kecil dan telinga lebih besar dibandingkan gajah Asia lainnya.";
      habitat = "Hutan hujan tropis dataran rendah di Sumatra.";
      classification = "Mammalia";
      family = "Elephantidae";
      scarcityLevel = "Endangered";
      remainingAmount = "Sekitar 2.400 ekor";
      eatingType = "Herbivora";
      funFact =
        "Gajah Sumatra berperan penting dalam menjaga keseimbangan ekosistem dengan menyebarkan biji tanaman.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/GajahSumatra/Image_1.jpg";
    } else if (label === "Harimau Sumatra") {
      commonName = "Harimau Sumatra";
      scientificName = "Panthera tigris sumatrae";
      description =
        "Harimau Sumatra adalah subspesies harimau yang ditemukan di Pulau Sumatra, Indonesia.";
      characteristics =
        "Bulu oranye dengan garis hitam tebal, tubuh kekar, dan cakar besar.";
      habitat =
        "Hutan hujan tropis, rawa-rawa gambut, dan dataran rendah di Sumatra.";
      classification = "Mammalia";
      family = "Felidae";
      scarcityLevel = "Critically Endangered";
      remainingAmount = "400-600 ekor";
      eatingType = "Karnivora";
      funFact =
        "Harimau Sumatra dikenal sebagai perenang ulung dan sering melintasi sungai di habitatnya.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/HarimauSumatra/Image_1.jpg";
    } else if (label === "Kakatua Jambul Kuning") {
      commonName = "Kakatua Jambul Kuning";
      scientificName = "Cacatua sulphurea";
      description = "Kakatua Jambul Kuning ditemukan di Sulawesi, Indonesia.";
      characteristics =
        "Jambul kuning cerah dan bulu putih, kulit wajah merah muda.";
      habitat = "Hutan tropis di Sulawesi.";
      classification = "Aves";
      family = "Cacatuidae";
      scarcityLevel = "Endangered";
      remainingAmount = "Sekitar 1.000 ekor";
      eatingType = "Omnivora";
      funFact =
        "Kakatua ini dikenal karena kecerdasannya meniru suara manusia.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/KakatuaJambulKuning/Image_1.jpg";
    } else if (label === "Kupu-Kupu Raja") {
      commonName = "Kupu-Kupu Raja";
      scientificName = "Ornithoptera alexandrae";
      description =
        "Kupu-Kupu Raja berasal dari wilayah tropis di Asia Tenggara, khususnya Papua New Guinea.";
      characteristics =
        "Sayap berwarna jingga dengan pola hitam dan bintik putih di tepi sayap.";
      habitat = "Hutan tropis dan daerah berhutan dengan tanaman milkweed.";
      classification = "Insecta";
      family = "Papilionidae";
      scarcityLevel = "Endangered";
      remainingAmount =
        "Populasi menurun drastis, meskipun data pastinya bervariasi.";
      eatingType = "Omnivora";
      funFact =
        "Kupu-Kupu Raja melakukan migrasi musimannya yang menempuh ribuan kilometer, menjadikannya salah satu migrasi serangga terjauh.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/KakatuaJambulKuning/Image_1.jpg";
    } else if (label === "Siamang") {
      commonName = "Siamang";
      scientificName = "Symphalangus syndactylus";
      description =
        "Siamang adalah primata arboreal terbesar dalam keluarga owa, hidup di hutan hujan tropis Sumatra dan Semenanjung Malaysia.";
      characteristics =
        "Tubuh hitam berbulu dengan kantung suara besar di tenggorokan, jari kedua dan ketiga berselaput untuk menggenggam ranting pohon.";
      habitat = "Hutan hujan tropis dengan kanopi tinggi.";
      classification = "Mammalia";
      family = "Hylobatidae";
      scarcityLevel = "Endangered";
      remainingAmount = "Kurang dari 200.000 individu";
      eatingType = "Herbivora";
      funFact =
        "Panggilan vokal Siamang digunakan untuk memperkuat ikatan keluarga dan menandai wilayah mereka.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/Siamang/Image_1.jpg";
    } else if (label === "Owa Jawa") {
      commonName = "Owa Jawa";
      scientificName = "Hylobates moloch";
      description =
        "Owa Jawa adalah primata endemik Pulau Jawa, Indonesia, dengan suara panggilan melodius yang digunakan untuk berkomunikasi.";
      characteristics = "Bulu abu-abu keperakan, wajah lebih gelap.";
      habitat =
        "Hutan hujan tropis dan subtropis di dataran rendah dan perbukitan Jawa.";
      classification = "Mammalia";
      family = "Hylobatidae";
      scarcityLevel = "Critically Endangered";
      remainingAmount = "4.000–4.500 individu di alam liar.";
      eatingType = "Herbivora";
      funFact =
        "Owa Jawa bersifat monogami, pasangan biasanya hidup bersama seumur hidup.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/OwaJawa/Image_1.png";
    } else if (label === "Orangutan Kalimantan") {
      commonName = "Orangutan Kalimantan";
      scientificName = "Pongo pygmaeus";
      description = "Orangutan Kalimantan ditemukan di Pulau Kalimantan.";
      characteristics =
        "Rambut panjang berwarna oranye kemerahan dan pipi besar pada jantan dewasa.";
      habitat = "Hutan hujan tropis lebat di Kalimantan.";
      classification = "Mammalia";
      family = "Hominidae";
      scarcityLevel = "Endangered";
      remainingAmount = "Sekitar 55.000 ekor";
      eatingType = "Herbivora";
      funFact =
        "Orangutan Kalimantan terkenal dengan kemampuan menggunakan alat seperti batang kayu untuk mengambil makanan.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/OrangutanKalimantan/Image_1.jpg";
    } else if (label === "Komodo") {
      commonName = "Komodo";
      scientificName = "Varanus komodoensis";
      description =
        "Komodo adalah kadal terbesar di dunia, endemik di pulau-pulau tertentu di Indonesia.";
      characteristics =
        "Ukuran tubuh besar, kulit bersisik kasar, lidah panjang bercabang, bisa beracun di mulut.";
      habitat =
        "Pulau-pulau vulkanik dengan savana, hutan, dan pantai di Nusa Tenggara, Indonesia.";
      classification = "Reptilia";
      family = "Varanidae";
      scarcityLevel = "Vulnerable";
      remainingAmount = "Perkiraan 5.700 ekor";
      eatingType = "Karnivora";
      funFact =
        "Komodo memiliki gigitan yang sangat kuat dan bakteri mematikan di mulutnya, yang membantu melumpuhkan mangsa.";
      animalImage =
        "https://storage.googleapis.com/animal-exotiscan/Komodo/Image_1.jpg";
    }

    return {
      label,
      commonName,
      scientificName,
      description,
      characteristics,
      habitat,
      classification,
      family,
      scarcityLevel,
      remainingAmount,
      eatingType,
      funFact,
      confidenceScore,
      animalImage,
    };
  } catch (error) {
    throw new InputError(`Terjadi kesalahan input: ${error.message}`);
  }
}

module.exports = predictClassification;
