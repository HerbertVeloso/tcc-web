import styled from 'styled-components';

interface LogoProps {
  width: string
}

export function Logo({ width }: LogoProps) {
  return (
    <Wrapper
      width={width}
      viewBox='0 0 272 58'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.08 57.8C9.81333 57.8 6.56 56.6 4.32 54.2C2.08 51.7467 0.96 48.2533 0.96 43.72V0.999996H9.76V44.36C9.76 46.28 10.1333 47.6667 10.88 48.52C11.68 49.3733 12.8 49.8 14.24 49.8C15.68 49.8 16.7733 49.3733 17.52 48.52C18.32 47.6667 18.72 46.28 18.72 44.36V0.999996H27.2V43.72C27.2 48.2533 26.08 51.7467 23.84 54.2C21.6 56.6 18.3467 57.8 14.08 57.8ZM33.4675 0.999996H44.5075L53.0675 34.52H53.2275V0.999996H61.0675V57H52.0275L41.4675 16.12H41.3075V57H33.4675V0.999996ZM67.6081 0.999996H76.4081V57H67.6081V0.999996Z'
      />
      <path
        d='M94.4388 57.8C90.1721 57.8 86.9454 56.6 84.7588 54.2C82.5721 51.7467 81.4788 48.2533 81.4788 43.72V40.52H89.7988V44.36C89.7988 47.9867 91.3188 49.8 94.3588 49.8C95.8521 49.8 96.9721 49.3733 97.7188 48.52C98.5188 47.6133 98.9188 46.1733 98.9188 44.2C98.9188 41.8533 98.3854 39.8 97.3188 38.04C96.2521 36.2267 94.2788 34.0667 91.3988 31.56C87.7721 28.36 85.2388 25.48 83.7988 22.92C82.3588 20.3067 81.6388 17.3733 81.6388 14.12C81.6388 9.69333 82.7588 6.28 84.9987 3.88C87.2388 1.42666 90.4921 0.199997 94.7588 0.199997C98.9721 0.199997 102.145 1.42666 104.279 3.88C106.465 6.28 107.559 9.74666 107.559 14.28V16.6H99.2388V13.72C99.2388 11.8 98.8654 10.4133 98.1188 9.56C97.3721 8.65333 96.2788 8.2 94.8388 8.2C91.9054 8.2 90.4388 9.98666 90.4388 13.56C90.4388 15.5867 90.9721 17.48 92.0388 19.24C93.1588 21 95.1588 23.1333 98.0388 25.64C101.719 28.84 104.252 31.7467 105.639 34.36C107.025 36.9733 107.719 40.04 107.719 43.56C107.719 48.1467 106.572 51.6667 104.279 54.12C102.039 56.5733 98.7588 57.8 94.4388 57.8ZM119.644 9H110.444V0.999996H137.644V9H128.444V57H119.644V9ZM141.905 0.999996H154.945C159.478 0.999996 162.785 2.06666 164.865 4.2C166.945 6.28 167.985 9.50666 167.985 13.88V17.32C167.985 23.1333 166.065 26.8133 162.225 28.36V28.52C164.358 29.16 165.852 30.4667 166.705 32.44C167.612 34.4133 168.065 37.0533 168.065 40.36V50.2C168.065 51.8 168.118 53.1067 168.225 54.12C168.332 55.08 168.598 56.04 169.025 57H160.065C159.745 56.0933 159.532 55.24 159.425 54.44C159.318 53.64 159.265 52.2 159.265 50.12V39.88C159.265 37.32 158.838 35.5333 157.985 34.52C157.185 33.5067 155.772 33 153.745 33H150.705V57H141.905V0.999996ZM153.905 25C155.665 25 156.972 24.5467 157.825 23.64C158.732 22.7333 159.185 21.2133 159.185 19.08V14.76C159.185 12.7333 158.812 11.2667 158.065 10.36C157.372 9.45333 156.252 9 154.705 9H150.705V25H153.905ZM174.171 0.999996H198.171V9H182.971V23.8H195.051V31.8H182.971V49H198.171V57H174.171V0.999996ZM210.033 0.999996H221.953L231.073 57H222.273L220.673 45.88V46.04H210.673L209.073 57H200.913L210.033 0.999996ZM219.633 38.44L215.713 10.76H215.553L211.713 38.44H219.633ZM235.343 0.999996H247.903L253.503 41.08H253.663L259.263 0.999996H271.823V57H263.503V14.6H263.343L256.943 57H249.583L243.183 14.6H243.023V57H235.343V0.999996Z'
      />
    </Wrapper>

  );
}


const Wrapper = styled.svg<LogoProps>`
  width: ${({ width }) => width};

  path {
    fill: var(--white);

    &:first-child {
      fill: var(--primary);
    }
  }
`;
