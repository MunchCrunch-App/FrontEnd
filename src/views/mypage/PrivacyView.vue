<template>
    <Layout :flex="true" :header="true" :footer="true">
        <MypageHeader title="개인정보 처리방침"></MypageHeader>
        <div class="mt-[50px] flex w-full break-keep px-5 text-sm text-black">
            개인정보 처리방침 (주)먼치크런치 (이하 ‘회사’라 한다.) 는 고객의
            정보를 소중하게 생각하며, [개인정보 보호법] 등 관련 법규를 준수하기
            위하여 [개인정보 취급방침] 을 제정하고 이를 준수하고 있습니다.
            회사의 개인정보 취급방침은 관련 법률 및 지침의 변경이나 회사 내부
            운영방침의 변경 등으로 인하여 개정될 수 있습니다. [개인정보
            취급방침] 이 변경될 경우 변경사항은 홈페이지에 게시됩니다.
            변경사항에 의문이 있으실 경우에는 언제라도 담당 분서에 문의하시거나
            홈페이지를 방문하여 확인하실 수 있습니다. 제 1조. 총칙회사는
            이용자의 개인정보보호를 매우 중요시하며, [개인정보 보호법] 등 관련
            법규를 준수하고 있습니다. 개인정보 처리방침을 통하여 이용자가
            제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보
            보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 개인정보
            취급방침의 지속적인 개선을 위하여 개인정보 취급방침을 개정하는데
            필요한 절차를 정하고 있습니다. 제 2조. 개인정보의 처리 목적 회사는
            다음 각 호의 목적으로 이용자의 개인정보를 수집 및 이용합니다.
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며
            이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를
            이행할 예정입니다. 1. 앱 회원가입 및 회원관리 : 회원제 서비스 제공에
            따른 개인식별, 가입의사 확인, 이용약관 위반 회원에 대한 이용제
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
