import React from 'react'
import styles from './details.module.css'
import Header from "../header/header";
import Text from "../text/text";

function Details({children}){
    return <div className={styles.details}>

        <div className={styles.det}>
            <Header>Ürün Bilgileri</Header>
            <Text>
                15 gün içinde ücretsiz iade.Detaylı bilgi için tıklayın
                Bu ürün MS E.C.S. ELEKTRONİK tarafından gönderilecektir.
                HP Z3700 Kablosuz Mouse Bordo/7UH89AA
                Bu butikte indirim kuponları/kodları geçerli değildir.
                Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
                Kampanya fiyatından satılmak üzere 50 adetten fazla stok sunulmuştur.
                İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.
            </Text>
        </div>

    </div>
}
export default Details