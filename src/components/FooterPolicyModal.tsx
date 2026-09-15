import React from 'react';
import { X, ExternalLink, ShieldCheck, FileText, Ban } from 'lucide-react';

export type PolicyType = 'privacy' | 'refund' | 'no-email' | null;

interface FooterPolicyModalProps {
  policyType: PolicyType;
  onClose: () => void;
}

export const FooterPolicyModal: React.FC<FooterPolicyModalProps> = ({ policyType, onClose }) => {
  if (!policyType) return null;

  const handleOpenNewWindow = () => {
    let title = '';
    let bodyHtml = '';

    if (policyType === 'privacy') {
      title = '개인정보 수집 / 이용동의';
      bodyHtml = `
        <h2>[개인정보 수집 / 이용동의]</h2>
        <div class="section">
          <h3>1. 개인정보의 수집 목적</h3>
          <p>이름, 연락처, 이메일, 지원기업명 및 직무, 문의내용, 추가 문의사항 또는 고민 등 맞춤 서비스 제공을 위한 각종 고지 및 통지 목적으로 개인정보를 처리합니다.</p>
        </div>
        <div class="section">
          <h3>2. 수집하는 개인정보의 항목</h3>
          <ul>
            <li><strong>필수 :</strong> 이름, 연락처, 이메일, 지원기업명 및 직무</li>
            <li><strong>선택 :</strong> 문의내용, 추가 문의사항 또는 고민</li>
          </ul>
          <p class="note">※ 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.<br>(IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록 등)</p>
        </div>
        <div class="section">
          <h3>3. 보유 이용기간</h3>
          <ol>
            <li>회원 수료 및 환불 시</li>
            <li>재화·서비스 공급 완료 및 요금 결제·정산 완료 시</li>
            <li>다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지
              <ul>
                <li>가) 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지</li>
                <li>나) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시·광고, 계약내용 및 이행 등 거래에 관한 기록
                  <ul>
                    <li>표시·광고에 관한 기록 : 6개월</li>
                    <li>계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년</li>
                    <li>소비자 불만 또는 분쟁처리에 관한 기록 : 3년</li>
                  </ul>
                </li>
                <li>다) 「통신비밀보호법」에 따른 통신사실확인자료 보관
                  <ul>
                    <li>가입자 전기통신일시, 개시·종료시간, 상대방 가입자번호, 사용도수, 발신기지국 위치추적자료 : 1년</li>
                    <li>컴퓨터통신, 인터넷 로그기록 자료, 접속지 추적자료 : 3개월</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div class="section">
          <h3>4. 개인정보 제공 동의 거부 권리 및 동의 거부에 따른 불이익</h3>
          <p>귀하는 개인 정보 제공 동의를 거부 할 권리가 있으며, 거절하신 경우에는 서비스의 제공이 제한 될 수 있습니다.</p>
          <p>위 보유기간에도 불구하고 계속 보유하여야 할 필요가 있을 경우에는 귀하의 동의를 받습니다.</p>
        </div>
      `;
    } else if (policyType === 'refund') {
      title = '교습비 반환 규정';
      bodyHtml = `
        <h2>[교습비 반환 규정]</h2>
        <p class="lead">안녕하세요 바로코칭은 아래와 같은 내용으로 학습비 환불절차를 공지 드립니다.</p>
        
        <div class="section">
          <h3>* 교습비(학습비) 등의 산정기준</h3>
          <p>'교습비(학습비) 등'이란 학습자가 학원에 교습이나 학습장소 이용의 대가로 납부하는 수강료·이용료 또는 교습비(학습비) 등(이하 '교습비'라 함)과 그 외에 추가로 납부하는 모든 경비(이하 '기타 경비'라 함)를 말합니다.</p>
        </div>

        <div class="section">
          <h3>* 교습비(학습비) 등의 반환기준</h3>
          <ul>
            <li>학습자가 감염병에 감염 또는 감염된 것으로 의심되거나 감염될 우려가 있는 학습자가 격리된 경우</li>
            <li>학원의 설립·운영자가 교습을 할 수 없거나 학습장소를 제공할 수 없게 된 경우</li>
            <li>학습자가 본인의 의사로 수강을 포기한 경우</li>
          </ul>
        </div>

        <div class="section">
          <h3>* 교습비(학습비) 반환원인 및 기준을 세분화하면 다음과 같습니다</h3>
          <p class="note">※ 학습비 반환기준 [관련근거: 평생교육법 시행령 제23조제2항 관련]</p>
          
          <table class="policy-table">
            <thead>
              <tr>
                <th>구 분</th>
                <th>반환사유 발생일</th>
                <th>반환금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. 제23조 제2항 제1호 및 제2호에 따른 반환사유의 경우</td>
                <td>수업을 할 수 없거나, 수업장소를 제공할 수 없게 된날</td>
                <td>이미 낸 학습비를 일할 계산한 금액</td>
              </tr>
              <tr>
                <td>
                  <strong>2. 제23조 제2항 제3호의 반환 사유에 따른 경우</strong><br><br>
                  가. 학습비 징수기간이 1개월 이내인 경우
                </td>
                <td>
                  수업시작 전<br>
                  총수업시간의 1/3이 지나기 전<br>
                  총수업시간의 1/2이 지나기 전<br>
                  총수업시간의 1/2이 지난 후
                </td>
                <td>
                  이미 낸 학습비 전액<br>
                  이미 낸 학습비의 2/3 해당액<br>
                  이미 낸 학습비의 1/2 해당액<br>
                  반환하지 아니함
                </td>
              </tr>
              <tr>
                <td>나. 학습비 징수기간이 1개월을 초과하는 경우</td>
                <td>
                  수업시작 전<br>
                  수업시작 후
                </td>
                <td>
                  이미 낸 학습비 전액<br>
                  반환사유가 발생한 그 달의 반환 대상 학습비(학습비 징수기간이 1개월 이내인 경우에 준하여 산출된 학습비를 말한다)와 나머지 달의 학습비 전액을 합산한 금액
                </td>
              </tr>
              <tr class="bg-gray">
                <td><strong>비 고</strong></td>
                <td colspan="2">
                  * 총 수업시간은 학습비 징수기간 중의 총 수업시간을 말하며, 반환금액의 산정은 반환사유가 발생한 날까지 경과 된 수업시간을 기준으로 한다.<br>
                  * 학습자의 귀책사유로 수업에 불참했을 경우는 전체 강의가 제공되었으므로 수업시간 경과로 계산함
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">
          <h3>* 반환 기준일</h3>
          <ul>
            <li><strong>수업개시이전 :</strong> 수강료반환청구서를 작성하여 제출한 당일</li>
            <li><strong>수업개시이후 :</strong> 수강료반환청구서를 작성하여 제출한 익일부터 적용</li>
          </ul>
        </div>

        <div class="section">
          <h3>* 학습비 환불안내</h3>
          <ul>
            <li><strong>학습비 환불기한 :</strong> 환불 기준일로부터 5일 이내에 학습자 개별 계좌로 입금</li>
            <li>할인 받은 과정은 할인된 금액으로 반환처리 됩니다.</li>
            <li>당일 수업은 일정변경 및 취소, 교습비(학습비) 반환의 경우 컨설팅 시작시간 이후에는 상황에 따라 불가할 수 있으니, 교습비 반환을 희망하실경우 최소 하루전에는 담당자에게 말씀해주시길 바랍니다.</li>
          </ul>
        </div>
      `;
    } else if (policyType === 'no-email') {
      title = '이메일무단수집거부';
      bodyHtml = `
        <h2>[이메일무단수집거부]</h2>
        <div class="section">
          <p class="lead">바로코칭에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.</p>
          <p>또한 이를 위반시 「정보통신망이용촉진및정보보호등에관한법률」 제50조의 2규정에 의하여 형사처벌될 수 있음을 유념하시기 바랍니다.</p>
        </div>

        <div class="section box">
          <h3>정보통신망법 제50조의 2규정 (전자우편주소의 무단 수집행위 등 금지)</h3>
          <ol>
            <li><strong>①</strong> 누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.</li>
            <li><strong>②</strong> 누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니된다.</li>
            <li><strong>③</strong> 누구든지 제1항 및 제2항의 규정에 의하여 수집·판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는 아니된다.</li>
          </ol>
        </div>
      `;
    }

    const win = window.open('', '_blank', 'width=780,height=850,scrollbars=yes,resizable=yes');
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <title>${title} - 바로코칭</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; padding: 30px; color: #1e293b; line-height: 1.6; background-color: #f8fafc; }
            .container { max-width: 700px; margin: 0 auto; background: #fff; padding: 32px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
            h2 { font-size: 20px; font-weight: 800; color: #0f172a; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #2563eb; }
            h3 { font-size: 15px; font-weight: 700; color: #1e293b; margin-top: 20px; margin-bottom: 8px; }
            p { font-size: 13px; color: #334155; margin: 6px 0; }
            ul, ol { font-size: 13px; color: #334155; padding-left: 20px; margin: 8px 0; }
            li { margin-bottom: 6px; }
            .note { font-size: 12px; color: #64748b; background: #f1f5f9; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #3b82f6; margin: 10px 0; }
            .lead { font-size: 14px; font-weight: 600; color: #0f172a; }
            .box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; margin-top: 16px; }
            .policy-table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 12px; }
            .policy-table th, .policy-table td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; vertical-align: top; }
            .policy-table th { background: #f1f5f9; font-weight: 700; color: #0f172a; }
            .bg-gray { background: #f8fafc; }
            .btn-close { display: inline-block; margin-top: 24px; padding: 10px 20px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; text-decoration: none; text-align: center; }
            .btn-close:hover { background: #1d4ed8; }
          </style>
        </head>
        <body>
          <div class="container">
            ${bodyHtml}
            <div style="text-align: center; margin-top: 30px;">
              <button class="btn-close" onclick="window.close()">창 닫기</button>
            </div>
          </div>
        </body>
        </html>
      `);
      win.document.close();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        id="policy-modal-dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            {policyType === 'privacy' && <ShieldCheck className="w-5 h-5 text-blue-600" />}
            {policyType === 'refund' && <FileText className="w-5 h-5 text-emerald-600" />}
            {policyType === 'no-email' && <Ban className="w-5 h-5 text-rose-600" />}
            <h3 className="font-extrabold text-slate-900 text-lg">
              {policyType === 'privacy' && '개인정보 수집 / 이용동의'}
              {policyType === 'refund' && '교습비 반환 규정'}
              {policyType === 'no-email' && '이메일무단수집거부'}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleOpenNewWindow}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition cursor-pointer"
              title="새 창으로 띄우기"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>새창으로 보기</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition cursor-pointer"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-slate-700 text-xs sm:text-sm leading-relaxed space-y-6">
          {policyType === 'privacy' && (
            <div className="space-y-5">
              <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl">
                <h4 className="font-bold text-blue-900 text-sm mb-1">[개인정보 수집 / 이용동의]</h4>
                <p className="text-blue-800 text-xs">
                  바로코칭 서비스 제공을 위한 개인정보 수집 및 이용 동의 안내입니다.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 text-sm mb-2">1. 개인정보의 수집 목적</h5>
                <p className="text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  이름, 연락처, 이메일, 지원기업명 및 직무, 문의내용, 추가 문의사항 또는 고민 등 맞춤 서비스 제공을 위한 각종 고지 및 통지 목적으로 개인정보를 처리합니다.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 text-sm mb-2">2. 수집하는 개인정보의 항목</h5>
                <ul className="space-y-1.5 text-slate-600 list-disc list-inside bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <li><strong className="text-slate-800">필수 :</strong> 이름, 연락처, 이메일, 지원기업명 및 직무</li>
                  <li><strong className="text-slate-800">선택 :</strong> 문의내용, 추가 문의사항 또는 고민</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500 bg-slate-100/70 p-2.5 rounded-lg border border-slate-200/60">
                  ※ 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.<br />
                  (IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록 등)
                </p>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 text-sm mb-2">3. 보유 이용기간</h5>
                <div className="space-y-2 text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100 text-xs">
                  <p>1) 회원 수료 및 환불 시</p>
                  <p>2) 재화·서비스 공급 완료 및 요금 결제·정산 완료 시</p>
                  <p className="font-semibold text-slate-800 pt-1">3) 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지</p>
                  <div className="pl-3 space-y-1.5 border-l-2 border-slate-200">
                    <p>가) 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지</p>
                    <p>나) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시·광고, 계약내용 및 이행 등 거래에 관한 기록</p>
                    <ul className="pl-4 list-disc space-y-0.5 text-slate-500">
                      <li>표시·광고에 관한 기록 : 6개월</li>
                      <li>계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년</li>
                      <li>소비자 불만 또는 분쟁처리에 관한 기록 : 3년</li>
                    </ul>
                    <p className="pt-1">다) 「통신비밀보호법」에 따른 통신사실확인자료 보관</p>
                    <ul className="pl-4 list-disc space-y-0.5 text-slate-500">
                      <li>가입자 전기통신일시, 개시·종료시간, 상대방 가입자번호, 사용도수, 발신기지국 위치추적자료 : 1년</li>
                      <li>컴퓨터통신, 인터넷 로그기록 자료, 접속지 추적자료 : 3개월</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 text-sm mb-2">4. 개인정보 제공 동의 거부 권리 및 동의 거부에 따른 불이익</h5>
                <p className="text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  귀하는 개인 정보 제공 동의를 거부 할 권리가 있으며, 거절하신 경우에는 서비스의 제공이 제한 될 수 있습니다.<br />
                  위 보유기간에도 불구하고 계속 보유하여야 할 필요가 있을 경우에는 귀하의 동의를 받습니다.
                </p>
              </div>
            </div>
          )}

          {policyType === 'refund' && (
            <div className="space-y-5">
              <div className="p-4 bg-emerald-50/60 border border-emerald-100 rounded-xl">
                <h4 className="font-bold text-emerald-900 text-sm mb-1">[교습비 반환 규정]</h4>
                <p className="text-emerald-800 text-xs">
                  안녕하세요 바로코칭은 아래와 같은 내용으로 학습비 환불절차를 공지 드립니다.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 text-sm mb-1.5">* 교습비(학습비) 등의 산정기준</h5>
                <p className="text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  '교습비(학습비) 등'이란 학습자가 학원에 교습이나 학습장소 이용의 대가로 납부하는 수강료·이용료 또는 교습비(학습비) 등(이하 '교습비'라 함)과 그 외에 추가로 납부하는 모든 경비(이하 '기타 경비'라 함)를 말합니다.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 text-sm mb-1.5">* 교습비(학습비) 등의 반환기준</h5>
                <ul className="space-y-1 text-slate-600 list-disc list-inside bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <li>학습자가 감염병에 감염 또는 감염된 것으로 의심되거나 감염될 우려가 있는 학습자가 격리된 경우</li>
                  <li>학원의 설립·운영자가 교습을 할 수 없거나 학습장소를 제공할 수 없게 된 경우</li>
                  <li>학습자가 본인의 의사로 수강을 포기한 경우</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 text-sm mb-1">* 교습비(학습비) 반환원인 및 기준</h5>
                <p className="text-xs text-slate-500 mb-2">
                  ※ 학습비 반환기준 [관련근거: 평생교육법 시행령 제23조제2항 관련]
                </p>

                {/* Styled Table */}
                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 border-b border-slate-200 font-bold">
                        <th className="p-3 border-r border-slate-200 min-w-[140px]">구 분</th>
                        <th className="p-3 border-r border-slate-200 min-w-[160px]">반환사유 발생일</th>
                        <th className="p-3 min-w-[180px]">반환금액</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 border-r border-slate-200 font-medium">
                          1. 제23조 제2항 제1호 및 제2호에 따른 반환사유의 경우
                        </td>
                        <td className="p-3 border-r border-slate-200">
                          수업을 할 수 없거나, 수업장소를 제공할 수 없게 된날
                        </td>
                        <td className="p-3">이미 낸 학습비를 일할 계산한 금액</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 border-r border-slate-200 font-medium">
                          <p className="font-bold text-slate-900 mb-1">2. 제23조 제2항 제3호의 반환 사유에 따른 경우</p>
                          <p className="text-slate-600">가. 학습비 징수기간이 1개월 이내인 경우</p>
                        </td>
                        <td className="p-3 border-r border-slate-200 space-y-1">
                          <p>수업시작 전</p>
                          <p>총수업시간의 1/3이 지나기 전</p>
                          <p>총수업시간의 1/2이 지나기 전</p>
                          <p>총수업시간의 1/2이 지나기 후</p>
                        </td>
                        <td className="p-3 space-y-1">
                          <p className="font-semibold text-emerald-700">이미 낸 학습비 전액</p>
                          <p>이미 낸 학습비의 2/3 해당액</p>
                          <p>이미 낸 학습비의 1/2 해당액</p>
                          <p className="text-rose-600 font-medium">반환하지 아니함</p>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 border-r border-slate-200 font-medium text-slate-600">
                          나. 학습비 징수기간이 1개월을 초과하는 경우
                        </td>
                        <td className="p-3 border-r border-slate-200 space-y-1">
                          <p>수업시작 전</p>
                          <p>수업시작 후</p>
                        </td>
                        <td className="p-3 space-y-1">
                          <p className="font-semibold text-emerald-700">이미 낸 학습비 전액</p>
                          <p>
                            반환사유가 발생한 그 달의 반환 대상 학습비 (학습비 징수기간이 1개월 이내인 경우에 준하여 산출된 학습비를 말한다)와 나머지 달의 학습비 전액을 합산한 금액
                          </p>
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 border-r border-slate-200 font-bold text-slate-900">비 고</td>
                        <td colSpan={2} className="p-3 text-slate-600 space-y-1 leading-snug">
                          <p>* 총 수업시간은 학습비 징수기간 중의 총 수업시간을 말하며, 반환금액의 산정은 반환사유가 발생한 날까지 경과 된 수업시간을 기준으로 한다.</p>
                          <p>* 학습자의 귀책사유로 수업에 불참했을 경우는 전체 강의가 제공되었으므로 수업시간 경과로 계산함</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h5 className="font-bold text-slate-900 text-xs sm:text-sm">* 반환 기준일 및 기타 사항</h5>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><strong>수업개시이전 :</strong> 수강료반환청구서를 작성하여 제출한 당일</li>
                  <li><strong>수업개시이후 :</strong> 수강료반환청구서를 작성하여 제출한 익일부터 적용</li>
                  <li className="pt-1 font-semibold text-slate-800">* 학습비 환불기한 : 환불 기준일로부터 5일 이내에 학습자 개별 계좌로 입금</li>
                  <li>* 할인 받은 과정은 할인된 금액으로 반환처리 됩니다.</li>
                  <li className="text-rose-700 font-medium pt-1">
                    * 당일 수업은 일정변경 및 취소, 교습비(학습비) 반환의 경우 컨설팅 시작시간 이후에는 상황에 따라 불가할 수 있으니. 교습비 반환을 희망하실경우 최소 하루전에는 담당자에게 말씀해주시길 바랍니다.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {policyType === 'no-email' && (
            <div className="space-y-5">
              <div className="p-4 bg-rose-50/60 border border-rose-100 rounded-xl">
                <h4 className="font-bold text-rose-900 text-sm mb-1">[이메일무단수집거부]</h4>
                <p className="text-rose-800 text-xs">
                  바로코칭에 게시된 이메일 주소가 무단 수집되는 것을 거부합니다.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <p className="font-medium text-slate-800">
                  바로코칭에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.
                </p>
                <p className="text-rose-600 font-semibold text-xs bg-rose-50 p-3 rounded-lg border border-rose-200">
                  또한 이를 위반시 「정보통신망이용촉진및정보보호등에관한법률」 제50조의 2규정에 의하여 형사처벌될 수 있음을 유념하시기 바랍니다.
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-slate-900 text-sm">
                  정보통신망법 제50조의 2규정 (전자우편주소의 무단 수집행위 등 금지)
                </h5>
                <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed">
                  <p>
                    <strong>①</strong> 누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.
                  </p>
                  <p>
                    <strong>②</strong> 누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니된다.
                  </p>
                  <p>
                    <strong>③</strong> 누구든지 제1항 및 제2항의 규정에 의하여 수집·판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는 아니된다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button
            type="button"
            onClick={handleOpenNewWindow}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>새창으로 띄우기</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-900 rounded-xl transition cursor-pointer shadow-xs"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
