import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Switch from '../components/Switch'

/**
 * UI 인터렉션 단위의 검증이 필요한 때
 * AAA 패턴 (Arrange / Act / Assert)
 * - 준비 실행 단언
 * - Arrange (준비) : 테스트 실행 전에 필요한 것들을 준비 (beforeEach, Mocking, Rendering component...)
 * - Act (실행) : User Action (click, state change 등.. act()로 wrapping )
 * - Assert (단언) : Act 의 결과 검증 (Text, state child count 같은 것들을 검증 )
 *
 *
 * findBy***
 * - 비동기 처리 로직
 * waitFor
 * - 비동기 처리를 못하는 함수들에 대해서 비동기 완료까지 대기
 * */
describe('<Switch /> component', () => {
  beforeEach(() => {
    const rendered = render(<Switch />)
  })
  it('기본 상태는 off 이다', () => {
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })
  it('<input /> 을 클릭하면 상태는 on이 된다.', async () => {
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    await waitFor(() => expect(checkbox).toBeChecked())
  })
  it('debounce 후 상태가 올바르게 변경되는지 확인', async () => {
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    await waitFor(() => expect(checkbox).toBeChecked(), { timeout: 30 })
    fireEvent.click(checkbox)
    await waitFor(() => expect(checkbox).not.toBeChecked())
  })
})
