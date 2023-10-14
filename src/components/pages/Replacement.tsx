import {useI18n} from "@shopify/react-i18n";

export const Replacement = () => {
  const [i18n] = useI18n({
    id: 'NotFound',
    fallback: ja,
    translations(_) {
      return ja
    },
  })

  const padZero = (value: number) => value.toString().padStart(2, "0")
  const current = new Date()
  const currentDateTime = [current.getHours(), current.getMinutes(), current.getSeconds()].map((v) => padZero(v)).join(':')

  return (
    <>
      <p>{i18n.translate('Replacement.withoutReplacement')}</p>
      <p>{i18n.translate('Replacement.withReplacement', {myArgs: currentDateTime})}</p>
    </>
  )
}

const ja = {
  Replacement: {
    withoutReplacement: '単なる翻訳',
    withReplacement: '表示日時: {myArgs}'
  }
}