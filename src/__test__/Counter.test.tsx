import { fireEvent, render, screen } from '@testing-library/react'
import Counter from '../components/Counter'

/**
 * @dec
 * ## 설정
 * 테스트의 시작 전 수행
 * 동일한 환경 보장
 * - 변수 설정, mock 주입
 * - pre-condition 체크
 *
 * ## 유닛 테스트 수행
 * 항상 동일 한 환경
 * 이전 테스트 영향 결과 X
 * 순수한 모듈의 동작 검증
 *
 * ## 해지
 * 테스트의 종료 후 마무리
 * 이후 테스트에 영향이 없도록
 * */
describe('<Counter /> component', () => {
  let unmount: any

  beforeEach(() => {
    const rendered = render(<Counter />)
    unmount = rendered.unmount
  })

  // afterEach(cleanup)

  it('초기 카운트가 렌더된다', () => {
    const count = screen.getByRole('count')
    expect(count).toBeDefined() // 버튼 렌더링 확인

    // "textContent"는 항상 문자열을 반환하기 때문에, null 대신 빈 문자열을 반환하도록 한다.
    // "parseInt" 를 사용하여, 텍스트 내용을 정수로 파싱하는데, 숫자일경우 그대로 추출하고, 숫자가 아닌 경우 0으로 간주한다.
    const countValue = Number.parseInt(count.textContent ?? '')
    expect(countValue).toBe(0)
  })
  it('카운트가 1로 렌더된다', () => {
    unmount()
    render(<Counter initialCount={1} />)
    const count = screen.getByRole('count')
    const countValue = Number.parseInt(count.textContent ?? '')
    expect(countValue).toBe(1)
  })
  it('click increase work', () => {
    const count = screen.getByRole('count')
    const increaseButton = screen.getByRole('button', { name: '+' })

    fireEvent.click(increaseButton)
    const countValue = Number.parseInt(count.textContent ?? '')
    expect(countValue).toBe(1)
  })
  it('click decrease work when count value 0', () => {
    const count = screen.getByRole('count')
    const increaseButton = screen.getByRole('button', { name: '-' })

    fireEvent.click(increaseButton)
    const countValue = Number.parseInt(count.textContent ?? '')
    expect(countValue).toBe(0)
  })
  it('click decrease work when count value 2', () => {
    unmount()
    render(<Counter initialCount={2} />)
    const count = screen.getByRole('count')
    const increaseButton = screen.getByRole('button', { name: '-' })

    fireEvent.click(increaseButton)
    const countValue = Number.parseInt(count.textContent ?? '')
    expect(countValue).toBe(1)
  })
})
