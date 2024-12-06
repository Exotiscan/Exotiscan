package com.example.exotiscanapp.ui.onboarding.screen

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.example.exotiscanapp.R
import com.example.exotiscanapp.data.sharedpreferences.OnBoardingPreferences
import com.example.exotiscanapp.databinding.FragmentThirdScreenBinding
import com.example.exotiscanapp.ui.MainActivity

class ThirdFragmentScreen : Fragment() {
    private lateinit var binding: FragmentThirdScreenBinding
    private lateinit var onBoardingPreferences: OnBoardingPreferences

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentThirdScreenBinding.inflate(inflater, container, false)
        onBoardingPreferences = OnBoardingPreferences(requireContext())

        binding.finishOnBoard.setOnClickListener {
            // Set onboarding finished in shared preferences
            onBoardingPreferences.setOnBoardingFinished(true)

            // Navigate to MainActivity (or Home Fragment if needed)
            val intent = Intent(requireContext(), MainActivity::class.java)
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK) // Ensure no backstack
            startActivity(intent)

            // Finish the onboarding activity
            requireActivity().finish()
        }

        return binding.root
    }
}
