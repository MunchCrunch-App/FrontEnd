<template>
    <Layout :flex="true" :header="true" :footer="true">
        <MypageHeader title="이용약관"></MypageHeader>
        <div class="mt-[50px] flex w-full break-keep px-5 text-sm text-black">
            이용약관 제 1장 총칙 제 1조 [목적] 본 이용약관은 (주)먼치크런치
            (이하 ‘회사’라 한다.) 가 운영하는 서비스 ‘베럽’을 통해서 제공되는
            전자상거래 관련 서비스 및 기타 서비스를 이용하는자 (이하 ‘이용자’라
            한다.) 사이의 권리, 의무, 기타 필요한 사항을 정리함으로써 상호
            이익을 도모하는 것을 그 목적으로 합니다. 제 2조 [약관의 효력 범위와
            개정] 1. 회사는 이 약관의 내용을 회원이 알기 쉽게 할 수 있도록
            서비스 내 또는 연결 화면을 통해 게시합니다. 2. 회사는 약관의 규제에
            관한 볍률, 전자문서 및 전자거래기본법, 전자금융거래법, 전자서명법,
            정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전자상거래 등에서의
            소비자보호에 관한 법률, 소비자기본법 등 관련 법정을 위배하지 않는
            범위에서 이 약관을 개정할 수 있습니다. 3. 본 이용약관은 개정될 수
            있으며 약관을 개정할 경우 회사는 개정된 약관을 적용하는 날로 부터
            7일 이전에 약관이 개정된다는 사실과 개정된 내용을 공지합니다. 단,
            회원의 권리, 의무에 중대한 영향을 주는 변경의 경우에는 적용일자 30일
            전부터 공지합니다. 4. 회사가 전 항에 따라 개정약관을 공지 또는
            통지하면서 회원에게 일정한 기한 내에 의사표시를 하지 않으면
            의사표시가 표명된 것으로 봅니다.
        </div>
    </Layout>
</template>

<script>
import Layout from '@/components/global/Layout.vue';
import MypageHeader from '@/components/mypage/MypageHeader.vue';

export default {
    components: {
        Layout,
        MypageHeader,
    },
};
</script>
