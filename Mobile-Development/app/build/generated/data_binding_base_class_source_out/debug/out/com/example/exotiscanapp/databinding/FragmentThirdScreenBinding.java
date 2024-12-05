// Generated by view binder compiler. Do not edit!
package com.example.exotiscanapp.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.exotiscanapp.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class FragmentThirdScreenBinding implements ViewBinding {
  @NonNull
  private final FrameLayout rootView;

  @NonNull
  public final ImageView btnIcon;

  @NonNull
  public final RelativeLayout finishOnBoard;

  @NonNull
  public final FrameLayout thirdScreen;

  private FragmentThirdScreenBinding(@NonNull FrameLayout rootView, @NonNull ImageView btnIcon,
      @NonNull RelativeLayout finishOnBoard, @NonNull FrameLayout thirdScreen) {
    this.rootView = rootView;
    this.btnIcon = btnIcon;
    this.finishOnBoard = finishOnBoard;
    this.thirdScreen = thirdScreen;
  }

  @Override
  @NonNull
  public FrameLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static FragmentThirdScreenBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static FragmentThirdScreenBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.fragment_third_screen, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static FragmentThirdScreenBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.btn_icon;
      ImageView btnIcon = ViewBindings.findChildViewById(rootView, id);
      if (btnIcon == null) {
        break missingId;
      }

      id = R.id.finishOnBoard;
      RelativeLayout finishOnBoard = ViewBindings.findChildViewById(rootView, id);
      if (finishOnBoard == null) {
        break missingId;
      }

      FrameLayout thirdScreen = (FrameLayout) rootView;

      return new FragmentThirdScreenBinding((FrameLayout) rootView, btnIcon, finishOnBoard,
          thirdScreen);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}