bubblesort :: [Int] -> Int

bubblesort n | length n = show n

main :: IO()
main = mapM_ print $ map bubblesort [1..100]
